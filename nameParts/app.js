"use strict";

// const fullName = "Valde shady Hannibal";

// const fornavn = "Valde";
// const mellemnavn = "shadyslim";
// const efternavn = "Hannibal";

// const myName = tekst.substring(tekst.length - 5);

// let startIndex = fullName.lastIndexOf(" ");
// let lastWord = fullName.substring(startIndex + 1);
// console.log(lastWord);

// let startIndex = fullName.lastIndexOf(" ", 3);
// let firstWord = fullName.substring(startIndex + 1, lastName - 1);
// console.log(firstWord);

// kjo osht
// let lastName = fullName.lastIndexOf(" ");
// let lastWord = fullName.substring(lastName + 1);
// console.log(lastWord);

// let middleName = fullName.indexOf(" ");
// let middleWord = fullName.substring(middleName + 1, lastName);
// console.log(middleWord);

// let firstName = fullName.lastIndexOf(" ");
// let firstWord = fullName.substring(0, middleName);
// console.log(firstWord);

// let firstName = fullName.indexOf(" ");
// let firstWord = fullName.substring(firstName);
// console.log(firstWord);

let fullName = "albus percival wulfric brian dumbledore";

let name5 = fullName.lastIndexOf(" ");
let show5 = fullName.substring(name5 + 1);
console.log(show5);

let name4 = fullName.lastIndexOf(" ");
let show4 = fullName.substring(name4 + 1, name5);
let final4 = fullName.substring(0, name4);
console.log(show4);

let name3 = fullName.lastIndexOf(" ");
let show3 = fullName.substring(name3 + 1, name4);
console.log(show3);

let name2 = fullName.lastIndexOf(" ");
let show2 = fullName.substring(name2 + 1, show3);
console.log(show2);

let name1 = fullName.lastIndexOf(" ");
let show1 = fullName.substring(0);
console.log(show1);
