// Write a function called *weekNumbersToWords* when given an input array of numbers 1-7, it outputs an array of the weeksdays written out. You must use a switch, not if/else.

// Example: <br>
// Input: [1,4,6,3,2] <br>
// Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

// Estimated time: 30 minutes <br>
// Total points: 30

let numberArray = [1,4,6,3,2];

function weekNumbersToWords(array) {
    let wordArray = [];
    for(let i = 0; i < array.length; i++) {
        switch(array[i]){
            case 1:
                wordArray[i] = 'Monday';
            break;
            case 2:
                wordArray[i] = 'Tuesday';
            break;
            case 3:
                wordArray[i] = 'Wednesday';
            break;
            case 4:
                wordArray[i] = 'Thursday';
            break;
            case 5:
                wordArray[i] = 'Friday';
            break;
            case 6:
                wordArray[i] = 'Saturday';
            break;
            case 7:
                wordArray[i] = 'Sunday';
            break;
            default:
                wordArray[i] = 'Oops.. Not a valid input';
        }
    }
    return wordArray;
}
console.log(weekNumbersToWords(numberArray));