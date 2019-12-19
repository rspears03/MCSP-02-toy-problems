// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

function maxConsecutiveOnes(array) {
  // 1) Understand the problem :
//  Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

// I: array
// O: return a number that display the maximum number of consecutive 1s
// C:
// E:

  // make a val that will hold the amount of consecutive 1s
    let count = 0
    let finCount = 0
  // loop into the array
    for(let i = 0; i < array.length; i++){
        // make a val count
         
        // if the index of the array equal one
          if(array[i] === 1){
                // the count goes up by one
                count++
//                 finCount = count
          }else{
              if(count > finCount){
                  
              }
          }
           // return finCount
              finCount = count
          console.log(count)
    }
}
 

maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3])
