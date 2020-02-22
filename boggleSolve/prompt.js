// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc.
// return the sum of the values of each letter in string

// I: str of letters
// O: results with the sum of all number in the str
// C:
// E:
const boggleSolve = str => {
    //make an array with all results of letter to number example(a = 1)
     const letters = [
a = 1 , b = 2 , c = 3
]
      res = str.toLowerCase().split('')//?
      results = []

         for(var i = 0; i < res.length; i++){
             if(letters.includes(res[i])){
                results.push(res[i])//?
             }
         }  
         return results//?
     };

     boggleSolve('abc')

    //  if(res.includes(res[i])){
    //     results.push(res[i])//?
    //  }