"user strict";

const fullName = "Burim Shady Jusufi";

function seperateString(fullName) {
  let lastName = fullName.lastIndexOf(" ");
  let lastWord = fullName.substring(lastName + 1);
  console.log(lastWord);

  let middleName = fullName.indexOf(" ");
  let middleWord = fullName.substring(middleName + 1, lastName);
  console.log(middleWord);

  let firstName = fullName.indexOf(" ");
  let firstWord = fullName.substring(0, middleName);
  console.log(firstWord, middleWord, lastWord);
}

seperateString(fullName);
