// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let numGuess = prompt("Pick a number")
numGuess = parseInt(numGuess)
// Prompt the user for another number that is bigger than the first number and cast it to a number

let addGuess = prompt("Pick a number greater than the first number")
addGuess = parseInt(addGuess)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number


for(let i = 0 ; numGuess <= addGuess; numGuess++){
  console.log(numGuess)
}




// PART 2: Averaging an array
// Create an array of numbers 

let numArray = [2,3,4,5,6,7,8,9,10]

// Write a for loop that calculates the sum of the elements 

let result = 0

for(i = 0; i < numArray.length; i++){
 result += numArray[i] 
}
console.log(result)




// Using the sum, calculate the average of all the elements (sum divided by the length of the array)


let average = result / numArray.length
console.log(average)