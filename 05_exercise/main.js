// Write a function called *getLastValue*. Pass an array of strings to the function, which sorts the strings alphabetically and returns the last element.

// Example: <br>
// Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
// Output: Wednesday

// Estimated time: 15 minutes <br>
// Total points: 15 
let arr = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];

function getLastValue(array) {
    let sorted = array.sort();
    console.log(sorted[sorted.length-1]);
}
getLastValue(arr);
