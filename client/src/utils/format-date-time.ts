export const formatDateTime = (dateTimeString: string): string => {
  try {
    const optionsDate: Intl.DateTimeFormatOptions = {
      month: 'long', // Shows full month name
      day: 'numeric', // Shows day without leading zero
    };

    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: 'numeric', // Shows hour without leading zero
      minute: '2-digit', // Keeps minute in two-digit format
      hour12: true, // Use 12-hour clock
      timeZoneName: 'short', // Show short timezone name
      timeZone: 'America/Los_Angeles', // Set timezone to PDT
    };

    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date time string');
    }

    const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    // Remove timezone abbreviation if you want just the time without it.
    const timeWithoutTimeZone = formattedTime.slice(
      0,
      formattedTime.lastIndexOf(' ')
    );

    return `${formattedDate} - ${timeWithoutTimeZone}`;
  } catch (error) {
    console.error('Date formatting error');
    return 'Invalid date';
  }
};
