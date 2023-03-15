"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("Peter");
console.log(result);
console.log(greeting("burim"));

const txt = `Greeting is ${greeting("Peter")}`;
console.log(txt);
