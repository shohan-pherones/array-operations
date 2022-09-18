"use strict";

/* // Slice
const arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2, 4)); // end parameter is not included, does not mutate the original array
console.log(arr);
console.log(arr.slice(1, -2));
console.log(arr.slice()); // copying whole array
console.log([...arr]); // copying whole array
console.log(arr.slice(-1)); // last element in an array
console.log(arr[arr.length - 1]); // value of last element
console.log(arr.at(-1)); // value of last element

// Splice
const arr2 = ["j", "k", "l", "m", "n"];
console.log(arr2.splice(3)); // does mutate the original array
console.log(arr2);
console.log(arr2.splice(1, 2)); // second param is the number of elements

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3.splice(-2, 1));

// Reverse
const arr4 = [45, 56, 78, 98, 32, 43, 35];
console.log(arr4.reverse()); // does mutate the original array
console.log(arr4);

// Concat
console.log(arr3);
console.log(arr4);
const joinedArr = arr3.concat(arr4);
console.log(joinedArr);
console.log([...arr3, ...arr4]);

// Join
const words = ["This", "is", "a", "nice", "day!"];
console.log(words);
console.log(words.join(" "));
console.log(words);

// Push, unshift, pop, shift, indexOf and includes

// At
const arrNew = [1990, 1980, 1996, 1998];
console.log(arrNew[2]);
console.log(arrNew.at(0));
console.log(arrNew[arrNew.length - 1]); // last el
console.log(arrNew.at(-1)); // last el
console.log(arrNew.slice(-1)[0]); // last el
 */

/* // forEach (does not produce new array)
const numbers = [344, 455, 678, 223, 432, 111, 333, 670];

for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
}

numbers.forEach(function (element, index, entireArray) {
  if (element > 500) {
    // console.log(element);
  }
});

// numbers.forEach(function (el, i, arr) {
//   console.log(`${i + 1}: ${el}`);
// });

numbers.forEach((el, i, arr) => console.log(`${i + 1}: ${el}`));

const friends = ["Tumpa", "Ayesha", "Sabrina", "Nibir", "Rakib"];

// friends.forEach((friend, i) => console.log(`${i + 1}: ${friend}`));
friends.forEach(function (friend, i) {
  console.log(`${i + 1}: ${friend}`);
});

// forEach does not support continue and break statements */

/* // forEach with maps and sets
// Map
const currencies = new Map([
  ["BDT", "Bangladeshi Taka"],
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
]);

// value, key, map
// element, index, array

currencies.forEach((value, key, map) => console.log(`${key}: ${value}`));

// Set
const friendsUnique = new Set([
  "Shohan",
  "Tumpa",
  "Ayesha",
  "Nibir",
  "Tumpa",
  "Shohan",
  "Sabrina",
]);

console.log(friendsUnique);

friendsUnique.forEach((value, _, set) => console.log(value, _)); // _ is a unnecessary variable */

/* // Map method (returns a new array)
// (value, index, array)
// (el, i, arr)

const transactions = [5000, -2000, 500, -500, 3000, -2000, 6000, -1500];

const furthurTransactions = transactions.map((transaction, i, arr) => {
  return transaction - 500;
});

console.log(furthurTransactions);

const fourRobbers = [15000, 28000, 7500, 13600];

const remainingMoney = fourRobbers.map((money, i, arr) => money / 2);

console.log(remainingMoney); */

/* // Filter
const transactions = [5000, -2000, 500, -500, 3000, -2000, 6000, -1500];

const deposits = transactions.filter((transaction, i, arr) => {
  if (transaction > 0) {
    return transaction;
  }
});

console.log(deposits);

const withdrawals = transactions.filter(
  (transactions, i, arr) => transactions < 0 && transactions
);

console.log(withdrawals);

const numbers = [23, 22, 44, 56, 78, 53, 32, 33];

const oddNumbers = numbers.filter((number, i, arr) => number % 2 !== 0);
console.log(oddNumbers);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const friends = [
  "Tumpa",
  "Ayesha",
  "Nibir",
  "Faysal",
  "Rakib",
  "Simi",
  "Mimi",
  "Maisha",
  "Shohan",
  "Sumaiya",
];

const friendsWithT = friends.filter((friend) => friend.startsWith("T"));
console.log(friendsWithT); */
