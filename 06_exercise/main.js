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