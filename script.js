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

/* // forEach
const movements = [1500, -500, 2000, -1200, 250, -500, 1000];

movements.forEach(function (move) {
  console.log(move / 2);
});

const footballPlayers = [
  "Neymar",
  "Messi",
  "Ronaldo",
  "Coutinho",
  "Rooney",
  "Casemiro",
];

footballPlayers.forEach((player, i) => console.log(`${i + 1}: ${player}`));

// Map
const favColors = ["black", "crimson", "tomato", "white", "purple", "pink"];

const favColorsUpperCase = favColors.map(
  (color) => color[0].toUpperCase() + color.slice(1)
);

console.log(favColorsUpperCase);

const numbers = [55, 42, 12, 55, 26, 32, 87, 98];

const newNumbers = numbers.map((num) => num - 10);
console.log(newNumbers);

// Filter
const favColors2 = ["black", "crimson", "tomato", "white", "purple", "pink"];

const favColorsP = favColors2.filter(function (color) {
  return color.startsWith("p");
});

console.log(favColorsP);

const transactions = [500, 200, -300, -150, 500, 200, -50];

const withdrawals = transactions.filter((transaction) => transaction < 0);
console.log(withdrawals); */

/* // Reduce
const movements = [500, 200, -300, -150, 500, 200, -50];

// let sum = 0;

// for (let i = 0; i < movements.length; i++) {
//   sum = sum + movements[i];
// }

// console.log(sum);

const balance = movements.reduce(function (accumulator, value, i, arr) {
  return accumulator + value;
}, 0);

console.log(balance);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const multi = arr.reduce((acc, el) => acc * el, 1);
console.log(multi);

// Maximum
const arr2 = [21, 55, 45, 87, 5, 99, 63, 21, 45];

const max = arr2.reduce((acc, value) => (acc > value ? acc : value), arr2[0]);
console.log(max);

// Minimum
const min = arr2.reduce(function (acc, value) {
  if (acc < value) {
    return acc;
  } else {
    return value;
  }
}, arr2.at(0));

console.log(min); */

/* // Data transformation pipeline
const movements = [500, 200, -300, -150, 500, 200, -50];

const totalDeposit = movements
  .filter((move) => move > 0)
  .map((deposit) => deposit * 1.2)
  .reduce((acc, deposit) => acc + deposit, 0);

console.log(totalDeposit);

const moneyRobbed = [15000, 25000, 35000, 14000, 25000, 7500];

const totalMoney = moneyRobbed
  .filter((money) => money >= 10000)
  .map((money) => money / 2)
  .filter((money) => money >= 10000)
  .reduce((acc, money) => acc + money, 0);

console.log(totalMoney); */

/* // Find
const movements = [500, 200, -300, -150, 500, 200, -50];

// console.log(movements.at(2));

const firstWithdrawal = movements.find((move) => move < 0);
console.log(firstWithdrawal);

const students = [
  { name: "Nibir", id: 19 },
  { name: "Sumaiya", id: 14 },
  { name: "Fahim", id: 17 },
  { name: "Sadril", id: 16 },
  { name: "Tumpa", id: 12 },
  { name: "Shohan", id: 11 },
];

const id16 = students.find((student) => student.id === 16);
console.log(id16.name);
const nameWithS = students.find((student) => student.name.startsWith("S"));
console.log(nameWithS); */

/* // Some and every
const arr = [17, 22, 35, 11, 3, 18, 15];

const anyNumberGreater40 = arr.some((number) => number > 40); //.any
console.log(anyNumberGreater40);

const everyNumberGreater10 = arr.every((number) => number > 10);
console.log(everyNumberGreater10); */

/* // flat and flatmap
const arr = [11, 22, [56, 45], 24, [55, [44, 88]], 74];
console.log(arr.flat(2)); // 1 is default, 1 level deep

const accounts = [
  {
    owner: "Shohan",
    movements: [500, 200, -300, -150, 500, 200, -50],
  },
  {
    owner: "Nibir",
    movements: [1500, 2100, -300, -150, 500, 2200, -150],
  },
  {
    owner: "Rakib",
    movements: [5000, 1200, -3000, -1500, 500, 200, -500],
  },
];

// const overalMovements = accounts.map((account) => account.movements).flat();
const overalMovements = accounts.flatMap((account) => account.movements);
console.log(overalMovements); */

/* // Sorting (rarely)
const students = ["Sarah", "Mim", "Rina", "Ayesha", "Tumpa"];
// console.log(students.sort());

const alphabets = ["g", "a", "c", "e", "f", "b", "d"];
// console.log(alphabets.sort()); // mutate the original array
// console.log(alphabets);

const arr = [18, 155, 31, 422, 333, 61, 29];
// console.log(arr.sort());

// const sortedArr = arr.sort(function (a, b) {
//   // return a > b ? 1 : -1; // ascending
//   return b > a ? 1 : -1; // descending
// });

const sortedArr = arr.sort((a, b) => a - b); // ascending
// const sortedArr = arr.sort((a, b) => b - a); // descending
console.log(sortedArr); */
