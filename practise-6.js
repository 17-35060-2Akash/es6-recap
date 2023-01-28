const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 42, 35, 36, 75];

const findOdd = numbers.filter(number => number % 2 != 0);
console.log(findOdd);