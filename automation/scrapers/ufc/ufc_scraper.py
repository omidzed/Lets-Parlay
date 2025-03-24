import os
import requests
from bs4 import BeautifulSoup
import psycopg2
from datetime import datetime
import json
import logging
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("scraper.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger("ufc_scraper")

# Load environment variables
load_dotenv()

def connect_to_db():
    """Establish connection to PostgreSQL database"""
    try:
        conn = psycopg2.connect(
            host=os.getenv("DB_HOST", "localhost"),
            port=os.getenv("DB_PORT", "5432"),
            database=os.getenv("DB_NAME", "letsParlay"),
            user=os.getenv("DB_USER", "dev"),
            password=os.getenv("DB_PASSWORD", "dev")
        )
        logger.info("Database connection established")
        return conn
    except Exception as e:
        logger.error(f"Database connection failed: {e}")
        return None

def fetch_ufc_page():
    """Fetch UFC events page"""
    try:
        url = os.getenv("UFC_RESULTS_URL", "https://www.ufc.com/events")
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        logger.info("Successfully fetched UFC events page")
        return response.text
    except Exception as e:
        logger.error(f"Failed to fetch UFC page: {e}")
        return None

def parse_events(html_content):
    """Parse UFC events from HTML content"""
    if not html_content:
        return []

    events = []
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find event cards on the UFC website
    # Note: These selectors will need to be adjusted based on the actual UFC website structure
    event_elements = soup.select('.l-listing__item--column')

    for element in event_elements:
        try:
            # Try to extract event name
            event_name_elem = element.select_one('.c-card-event--result__headline')
            if not event_name_elem:
                event_name_elem = element.select_one('.c-card-event__headline')

            event_name = event_name_elem.text.strip() if event_name_elem else "Unknown Event"

            # Try to extract event date
            date_elem = element.select_one('.c-card-event--result__date')
            if not date_elem:
                date_elem = element.select_one('.c-card-event__date')

            event_date = date_elem.text.strip() if date_elem else "Unknown Date"

            # For simplicity in this example, we'll create a sample fight structure
            # In a real implementation, you'd need to click into each event to get fight details
            fights = []

            # Store basic event info
            events.append({
                "name": event_name,
                "date": event_date,
                "fights": fights
            })

            logger.info(f"Parsed event: {event_name}")

        except Exception as e:
            logger.error(f"Error parsing event: {e}")
            continue

    logger.info(f"Parsed {len(events)} events total")
    return events

def save_to_db(conn, events):
    """Save parsed events to database"""
    if not conn or not events:
        return

    cursor = conn.cursor()

    try:
        # First, make sure we have the required tables
        # Check if we need to store scraped data logs
        cursor.execute("""
        SELECT EXISTS (
            SELECT FROM information_schema.tables
            WHERE table_name = 'scraped_data_log'
        )
        """)

        if not cursor.fetchone()[0]:
            logger.info("Creating scraped_data_log table")
            cursor.execute("""
            CREATE TABLE scraped_data_log (
                id SERIAL PRIMARY KEY,
                source VARCHAR(50) NOT NULL,
                event_name TEXT NOT NULL,
                processed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                fights_count INTEGER,
                success BOOLEAN DEFAULT TRUE
            )
            """)

        # Log the scraping operation
        for event in events:
            cursor.execute(
                """
                INSERT INTO scraped_data_log (source, event_name, processed_at, fights_count, success)
                VALUES (%s, %s, %s, %s, %s)
                """,
                ("UFC", event["name"], datetime.now(), len(event["fights"]), True)
            )

        conn.commit()
        logger.info("Successfully logged scraping operation")

    except Exception as e:
        logger.error(f"Error saving to database: {e}")
        conn.rollback()
    finally:
        cursor.close()

if __name__ == "__main__":
    logger.info("Starting UFC scraper")

    # Fetch and parse UFC events
    html_content = fetch_ufc_page()
    events = parse_events(html_content)

    # Connect to database
    conn = connect_to_db()

    # Save parsed events to database
    if conn:
        save_to_db(conn, events)
        conn.close()

    logger.info("UFC scraper completed")
