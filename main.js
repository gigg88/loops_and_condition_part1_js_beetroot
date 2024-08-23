//Task 1: Counting Numbers
//Write a program that uses a for loop to print all the even numbers between 1 and 20 (inclusive).



for ( let i = 0; i <= 20; i++) {
    if ( i % 2 === 0)
 console.log(i);
}

//Task 2: Sum of an Array
//Write a program that uses a while loop to iterate through an array of numbers and calculate the sum of all elements.

let numbers = [23, 57, 82, 15, 96, 4];

let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum = sum + numbers[i];
  i++;
}

console.log("The sum of the numbers is:", sum);

//Task 3: Guessing Game
//Create a guessing game where the user has to guess a randomly generated number between 1 and 100. Use a do...while loop to allow the user to keep guessing until they get the correct answer.
//Provide feedback on each guess (too high, too low).

let randomNumber = Math.floor(Math.random() * 100);
let number;

console.log(randomNumber);

do {
  number = prompt("Provide a number");

  if (number > randomNumber) {
    alert("too high");
  } else if (number < randomNumber) {
    alert("too low");
  } else {
    alert("Correct");
    break; 
  }
} while (true);




