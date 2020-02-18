/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

const allAnagrams = function(string) {
  const results = {};

  const makeAnagrams = function(curr, remain) {
    if (curr.length === string.length) {
      results[curr] = true;
    } else {
      for (let i = 0; i < remain.length; i++) {
        makeAnagrams(
          curr + remain[i],
          remain.slice(0, i) + remain.slice(i + 1)
        );
      }
    }
  };
  makeAnagrams("", string);

  return Object.keys(results);
};

console.log(allAnagrams("abc"));
