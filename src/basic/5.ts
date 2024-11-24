enum DayOfWeek {
  Monday = "weekday",
  Tuesday = "weekday",
  Wednesday = "weekday",
  Thursday = "weekday",
  Friday = "weekday",
  Saturday = "dayOff",
  Sunday = "dayOff",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday && day === DayOfWeek.Sunday) {
    return true;
  } else {
    return false;
  }
};

// console.log(isWeekend(DayOfWeek.Friday));
// console.log(isWeekend(DayOfWeek.Sunday));
