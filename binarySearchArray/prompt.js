/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
    if(!array.includes(target)){
        return null
    }else{
        for(var i = 0; i < array.length; i++){
            if(array.indexOf(target) === array[i]){
                return array[i];//?
            }
        }
    }
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3

// var index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null

