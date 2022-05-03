function reverseNumber(number)  {
    return Math.sign(number) * parseFloat(number.toString().split('').reverse().join(''));
}

console.log(reverseNumber(1234));
console.log(reverseNumber(100000000));
console.log(reverseNumber(-321));
console.log(reverseNumber(-23.45));