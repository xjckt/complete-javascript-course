// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (t1, t2) {
//   //   problem 2 solution - concat will merge two arrays together
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// // };
// // const amplitude = calcTempAmplitude([3, 2, 12, 44], [2, 8, 99]);
// // console.log(amplitude);

// // PROBLEM 2:
// // Function should now receive 2 arrays of temps

// // // 1) Understanding the problem
// // // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// // // 2) Breaking up into sub-problems
// // // - Merge 2 arrays

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // 3) fix the bug
//     // value: Number(prompt("Degrees celsius:")),
//     value: 10,
//   };
//   // 2) Find the bug
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // 1) Identify the bug
// console.log(measureKelvin());

// // Using a debugger tool
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 2, 12, 44], [2, 8, 99]);
// console.log(amplitudeBug);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Understanding the problem
// 1) Function needs to loop through the array to concatenate into the string. Array needs to transform into string
// 2) The days needs to increase by 1 after the iteration

// Breaking into sub-problems
// to get the days in the array, need to add 1 to the index
// loop the elements in the array to get the value out
// add ... between elements and start and end of string

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    const tempStr = `${arr[i]}ºC in ${i + 1} days... `;
    str += tempStr;
  }
  console.log(`... ${str}`);
};

printForecast(test2);
// "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
