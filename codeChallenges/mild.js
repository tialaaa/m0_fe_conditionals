// Write a JavaScript program that defines a variable that stores a Number.
// The program should print out the String "even" if the Number is even,
// and the String "odd" if the Number is odd.
// Hint: You may need to do some extra research on the remainder operator (%) to solve this challenge.

var count = -203;

if (count % 2 === 1 || count % 2 === -1) {
    console.log("odd");
} else if (count % 2 === 0 ) {
    console.log("even");
} else {
    console.log("something else")
}

count = 0;

if ( count % 2 === 1 || count % 2 === -1) {
    console.log("odd")
} else if ( count % 2 === 0) {
    console.log("even")
} else { 
    console.log("something else")
}
