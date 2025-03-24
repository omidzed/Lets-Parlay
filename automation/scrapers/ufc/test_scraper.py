import os
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import sys

# Load environment variables
load_dotenv()

def test_scraper():
    print("Starting UFC scraper test...")

    # 1. Test fetching the UFC page
    print("Fetching UFC page...")
    try:
        url = os.getenv("UFC_RESULTS_URL", "https://www.ufc.com/event/ufc-fight-night-march-15-2025")
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        html_content = response.text

        # Save the raw HTML for inspection
        with open("test_raw_html.html", "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"Raw HTML saved to test_raw_html.html ({len(html_content)} bytes)")

        # 2. Simple parsing test
        soup = BeautifulSoup(html_content, 'html.parser')

        # Find event cards
        event_elements = soup.select('c-listing-fight__outcome--win')
        print(f"Found {len(event_elements)} event elements")

        # Look at first event if available
        if event_elements:
            first_element = event_elements[0]

            # Try to get event name
            event_name_elem = first_element.select_one('.c-card-event--result__headline')
            if not event_name_elem:
                event_name_elem = first_element.select_one('.c-card-event__headline')

            event_name = event_name_elem.text.strip() if event_name_elem else "Unknown Event"

            # Try to get event date
            date_elem = first_element.select_one('.c-card-event--result__date')
            if not date_elem:
                date_elem = first_element.select_one('.c-card-event__date')

            event_date = date_elem.text.strip() if date_elem else "Unknown Date"

            print(f"\nFirst event: {event_name}")
            print(f"Date: {event_date}")

        print("\nHTML structure test completed")

    except Exception as e:
        print(f"Error during scraper test: {e}")
        return False

    return True

if __name__ == "__main__":
    test_scraper()
