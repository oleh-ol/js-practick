'use strict'

// ======================================================>

//Напишіть скрипт, який замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// ------- Не працює заміна символів -------

// let startString = 'JavaScript';
// for (let i = 0; i < startString.length; i++) {
//   startString[i] = startString[i] === startString[i].toLowerCase() ? startString[i].toUpperCase() :  startString[i].toLowerCase();
// }
// console.log(startString);

// ------- Працює через тернарний оператор -------

// const startString = "JavaScript";
// let endString = "";
// for (let i = 0; i < startString.length; i++) {
//   endString += startString[i] === startString[i].toLowerCase() ? startString[i].toUpperCase() : startString[i].toLowerCase();
// }
// console.log(endString);

// ------- Працює через IF -------

// const startString = "JavaScript";
// let endString = "";
// for (let i = 0; i < startString.length; i++) {
//   if (startString[i] === startString[i].toLowerCase()) {
//     endString += startString[i].toUpperCase();
//   } else {
//     endString += startString[i].toLowerCase();
//   }
// }
// console.log(endString);

// ------- Функція -------

// function caseToggle(string) {
//     let newString = '';
//     for (let i = 0; i < string.length; i++) {
//         newString += string[i] === string[i].toLowerCase() ? string[i].toUpperCase() : string[i].toLowerCase();
// }
//     console.log(newString);
// }

// console.log(caseToggle("JavaScript"));
// console.log(caseToggle("Your review was submitted successfully"));
// console.log(caseToggle("Escape"));

// ======================================================>


//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
//const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];



// function unique(arr) {
//     const uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let couter = 0;
//         for (const item of arr) {
//             if (item === arr[i]) {
//                 couter += 1;
//             }
//         }
//         if (couter === 1) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

// console.log(unique(["HTML", "CSS", "JS", "React", "JS", "CSS", "JS", "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"]));
// console.log(unique(["HTML", "CSS", "JS", "React", "JS", "CSS", "JS"]));
