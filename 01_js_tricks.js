// Fitering duplicates from array

const array = [1, 2, 3, 2, 1, true, true, false, 'Harish', 1, 5];
const filtered__array = [...new Set(array)];
console.log(filtered__array)

// Turn a Decimal Number to a Normal number

const number = 23.33;
console.log({ number })
console.log({ number: number | 0 })

// Getting the last value of an array into new array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(-1));

const n = 23.6565
console.log(~~n);
const string = "24"
console.log(+24)