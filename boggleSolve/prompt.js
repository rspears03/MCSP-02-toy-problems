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
a = 1,b = 2,c = 3,
d = 4,e = 5,f = 6,
g = 7,h = 8,i = 9,
j = 10,k = 11,l = 12,
m = 13,n = 14,o = 15,
p = 16,q = 17,r = 18,
s = 19,t = 20,u = 21,
v = 22,w = 23,x = 24,
y = 25,z = 26,
]
    //take the str an split it 
      res = str.toLowerCase().split('')
      results = []
        //check if the letter are include in the array
         for(var i = 0; i < res.length; i++){
             if(res[i].include(letters)){
                // results.push(res[i])
             }
         }
        // return results   
         return results  
     };
