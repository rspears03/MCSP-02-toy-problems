//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

// const flatten = function(array) {
//    return array.flat(Infinity)
// };


const flatten = function(arr, result = []) {
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i], result)
        }else{
            result.push(arr[i])
        }
    }
    return result
}

flatten([1,['a', 2, [8, true], 7]])//? 