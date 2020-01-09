// Write a function that returns the last index that a given element is found
// Ex: lastIndexOf(4, [2,3,6,4,7,4,9]) returns 5

function lastIndexOf(target, array) {
  if(!array.includes(target)) return null;

 for(let i = array.length-1; i >= 0; i--){
     if(array[i] === target){
        return array[i].length
     }
 } 
}

lastIndexOf(4, [2,3,6,4,7,4,9])

