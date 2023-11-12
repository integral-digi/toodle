const checkTime = (currentHour?: number) => {
    // Handle the case where currentHour is undefined.
    if (currentHour === undefined) {
      return "Day";
    }
  
    if (currentHour >= 1 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };
  
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentHour = new Date().getHours(); // Get the current hour of the day
  
  export const timeOfDay = checkTime(currentHour);
  
  console.log(`In the time zone ${currentTimeZone}, it is currently ${timeOfDay}.`);

  const getCurrentDateFormatted = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
  
    const currentDate = new Date();
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
  
    const formattedDate = dateFormatter.format(currentDate);
  
    // Add the ordinal suffix to the day
    const dayWithSuffix = addOrdinalSuffix(currentDate.getDate());
  
    return `it's ${formattedDate.replace(/(\d+)/, dayWithSuffix)}`;
  };
  
  // Function to add ordinal suffix to a number
  const addOrdinalSuffix = (num: number): string => {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) {
      return num + 'st';
    }
    if (j === 2 && k !== 12) {
      return num + 'nd';
    }
    if (j === 3 && k !== 13) {
      return num + 'rd';
    }
    return num + 'th';
  };
  
  // Example usage
  export const formattedDate = getCurrentDateFormatted();
  console.log(formattedDate);
  