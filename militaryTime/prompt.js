// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

function militaryTime(timeStr) {
  //write code here
}

// 1) Understand the problem :
// Write a function that takes in a string of the time and returns the time in military format
// I: timeStr(A string that is a number in 12 hours time)
// O: A new string milTime(return to the user a string that is convert from 12hour time to 24hour time)
// C:
// E:

// 2) Devise a Strategy
//  1)Plan 1
  //take timeStr and run the includes method to check if timeStr includes a "pm" or "am"
  // if the time includes a "pm" split the string at : 
  // add 12 to the first number 
  // catcot the array but together