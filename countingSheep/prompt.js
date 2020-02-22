// Consider an array of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// For example,

//     [true, true, true, false,
//         true, true, true, true,
//         true, false, true, false,
//         true, false, false, true,
//         true, true, true, true,
//         false, false, true, true]
// The correct answer would be 17.

var countSheep = function(arr) { 
    const count = 0;
    // if(!arr.includes(true || false)){
    //     return null
    // }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === true){
            count++
        }
    }
    return count//?
 }



 countSheep(sheeps)

    var sheeps = [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
      true, false, false, true,
         true, true, true, true,
          false, false, true, true];