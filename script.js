function minDate(dates) {
  // Use reduce to find the minimum date string
  return dates.reduce((min, current) => current < min ? current : min);
}

// Examples
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // "2022/12/31"

