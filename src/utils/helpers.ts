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
