//Write a function that takes in a number (n) and a string, then return the string repeated n number of times

// Examples:
// repeatStr(6, "I")  "IIIIII"
// repeatStr(5, "Hello")  "HelloHelloHelloHelloHello"

function repeatStr(n, string) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
}
