"use strict";

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice
// }
// console.log(fruitProcessor(2, 3));

// const friend1 = "Mike";
// const friend2 = "John";
// const friend3 = "Steve";

// const friends = ['Mike', 'John', 'Steve'];
// friends.push('Rob') - add an element to end of array
// friends.unshift('Noel') - add an element to the start of array
// friends.pop() - removes the last element of the array
// friends.shift() - removes the first element of the array
// friends.indexOf() - gives the index of targeted element
// friends.includes() - gives a boolean to determine if the element is present
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// const years = [1990, 1976, 1965, 1994, 2000];

// console.log(calcAge(years[years.length - 1]));

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`
//         return this.summary;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummary())
// console.log(jonas['calcAge'](1994));

// Challenge - create the string
// Jonas has 3 friends, and his best friend is called Michael

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

//Challenge - write a  method
// "Jonas is a 46 year old teacher, and he has a driver's licence."

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights rep ${rep}`)
// }

// const jonas = [
//     'Jonas',
//     'Smith',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     // Reading from Jonas array
//     // console.log(jonas[i])

//     // filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i])
// };

// console.log(types)

// const years = [1991, 2007, 1994, 1980];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages)

// // continue (only strings)

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// // break (code stops when number is found)

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

// Looping backwards

// const jonas = [
//     'Jonas',
//     'Smith',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// Loop inside a loop
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---Starting exercise ${exercise}---`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight rep ${rep}`)
//     };
// };

// while loop

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights rep ${rep}`);
//     rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is ending');
// }
