// 1. calculateDifference
function calculateDifference(num1, num2) {
    return num1 - num2;
}

console.log("Difference:", calculateDifference(10, 4));


// 2. isOdd
function isOdd(num) {
    return num % 2 !== 0;
}

console.log("Is Odd:", isOdd(7));
console.log("Is Odd:", isOdd(8));


// 3. findMin
function findMin(numbers) {
    return Math.min(...numbers);
}

console.log("Minimum Number:", findMin([10, 5, 8, 2, 15]));


// 4. filterEvenNumbers
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// 5. sortArrayDescending
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

console.log("Descending Order:", sortArrayDescending([10, 3, 8, 1, 5]));


// 6. lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log("Lowercase First Letter:", lowercaseFirstLetter("Hello"));


// 7. findAverage
function findAverage(numbers) {
    let sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log("Average:", findAverage([10, 20, 30, 40]));


// 8. isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Is Leap Year (2024):", isLeapYear(2024));
console.log("Is Leap Year (2025):", isLeapYear(2025));