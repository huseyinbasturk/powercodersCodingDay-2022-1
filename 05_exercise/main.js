let arr = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];

function getLastValue(array) {
    let sorted = array.sort();
    console.log(sorted[sorted.length-1]);
}
getLastValue(arr);
