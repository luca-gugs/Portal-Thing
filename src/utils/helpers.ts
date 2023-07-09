export const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const monthFullNameArray = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const fakeUsers = [
  { username: "John", timestamp: new Date() },
  { username: "Jane", timestamp: new Date() },
  { username: "Alice", timestamp: new Date() },
  { username: "User4", timestamp: new Date() },
  { username: "User5", timestamp: new Date() },
  { username: "User6", timestamp: new Date() },
  { username: "User7", timestamp: new Date() },
  { username: "User8", timestamp: new Date() },
  { username: "User9", timestamp: new Date() },
  { username: "User10", timestamp: new Date() },
  { username: "User11", timestamp: new Date() },
  { username: "User12", timestamp: new Date() },
  { username: "User13", timestamp: new Date() },
  { username: "User14", timestamp: new Date() },
  { username: "User15", timestamp: new Date() },
  { username: "User16", timestamp: new Date() },
  { username: "User17", timestamp: new Date() },
  { username: "User18", timestamp: new Date() },
  { username: "User19", timestamp: new Date() },
  { username: "User20", timestamp: new Date() },
];

export function addCommas(number: number): any {
  // Convert the number to a string
  const numberString = number.toString();

  // Split the string into integer and decimal parts (if any)
  const parts = numberString.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  // Add commas to the integer part
  const integerWithCommas = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine the integer part and decimal part (if any)
  let result = integerWithCommas;
  if (decimalPart.length > 0) {
    result += "." + decimalPart;
  }

  return result;
}
