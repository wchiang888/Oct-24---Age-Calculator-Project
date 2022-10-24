// task 1, 2, & 3
let inputName = document.querySelector(".name");
let inputYear = document.querySelector(".year");
let message = document.querySelector(".message");
let ageButton = document.querySelector(".age-button")

// task 4
let currentYear = 2022;

// task 5 & 6
let userName = inputName.value;
let userYear = inputYear.value;
console.log (userYear)

// task 7
let age = currentYear - Number(userYear);



ageButton.onclick = function() { 
  message.innerHTML = userName + ", it looks like you are turning" + value(age) + " years old!"

  // task 8: assign a value to userName. Set it equal to the value of inputName.
 

  // task 9: assign a value to userYear. Set it equal to the value of inputYear. This is a number! Be sure to use the Number function on it!
 

  // task 10: assign a value to age. We need to calculate this value by subtracting the userYear from currentYear
 

  // task 11: using .innerHTML, update message to display the userName and age. Use string interpolation for this to have a personalized message like: ________, it looks like you are (turning) _____ years old!


  
}
