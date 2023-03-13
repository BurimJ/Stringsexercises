"use strict";

const fullName = "Valde shady Hannibal";

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

let lastName = fullName.lastIndexOf(" ");
let lastWord = fullName.substring(lastName + 1);
console.log(lastWord);

let middleName = fullName.indexOf(" ");
let middleWord = fullName.substring(middleName + 1, lastName);
console.log(middleWord);

let firstName = fullName.lastIndexOf(" ");
let firstWord = fullName.substring(0, middleName);
console.log(firstWord);
// let firstName = fullName.indexOf(" ");
// let firstWord = fullName.substring(firstName);
// console.log(firstWord);
