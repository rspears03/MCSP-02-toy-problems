// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc.
// return the sum of the values of each letter in string

function solve(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = string.split("");

  return letters.reduce((sum, curr) => {
    return (sum += alphabet.indexOf(curr) + 1);
  }, 0);
}

console.log(solve("zodiac"));
console.log(solve("strength"));
console.log(solve("chruschtschov"));
console.log(solve("abcde"));
