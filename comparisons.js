// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log(numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log(numberTeachers === numberStudents);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log(numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log(numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log(numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log(numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log(numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// This will log the result of the comparison: is 4 less than 9? This should log: true.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// This will declare the number variable "books" as 3, and log the result of the comparison: is 4 less than the number of books? This should log: false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// This will declare two number variables: friends as 6, and siblings as 2. Then it will log the result of the comparison: is friends greater than siblings? This should log: true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// This will declare two number variables: attendees as 9, and meals as 8. Then it will log the result of the comparison: is attendees not strictly equal to means? This should log: true.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
// log expected: true
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
// log expected: false
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
// log expected: true
console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
if (age < 1) { 
    var dogType = "Puppy"
} else { 
    var dogType = "Adult"
}
if (lovesToPlay === true && dogType === "Puppy") {
    console.log("true")
} else {
    console.log("false") 
}

console.log("Simplified version 2:")
if (lovesToPlay === true && age < 1) {
    console.log("true")
} else {
    console.log("false") 
}

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: This conditional logged "false" after evaluating my two If statements.
// The first If statement declared the variable dogType as "Puppy" if the variable age was less than 1,
// otherwise it declared dogType as "Adult".
// The second If statement used the logical operator && to evaluate multiple conditions
// which are: if variable lovesToPlay equals true and if dogType equals Puppy.
// Since our dog is 1 year old, it is not a puppy based on the defined dogType variable,
// therefore the final log is false.

// If we assume everyone knows that a puppy must be less than 1 year old
// you could use the simplified version 2 instead.