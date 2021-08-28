// doubleValues - write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

const valuesArr = [1, 2, 3, 4, 5, 6];
let doubled = [];

valuesArr.forEach(function (element) {
  doubled.push(element * 2);
  return doubled;
});

function doubleValues(arr) {
  let doubledArr = [];
  arr.forEach(function (element) {
    doubledArr.push(element * 2);
  });
  return doubledArr;
}

// onlyEvenValues - Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

function onlyEvenValues(arr) {
  let evenValues = [];
  arr.forEach(function (element) {
    if (element % 2 === 0) {
      return evenValues.push(element);
    }
  });
  return evenValues;
}

// showFirstAndLast - Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(arr) {
  let firstAndLast = [];
  arr.forEach(function (str) {
    return firstAndLast.push(`${str[0]}${str[str.length - 1]}`);
  });
  return firstAndLast;
}

// addKeyAndValue - Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

// Pay attention to using bracket notation vs. dot notation in this problem; in square brackets, you can do javascript

function addKeyAndValue(arr, key, val) {
  let newArr = [];
  arr.forEach(function (element) {
    element[key] = val;
    return newArr.push(element);
  });
  return newArr;
}

console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

//vowelCount - Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelObj = {};
  Array.from(str).forEach(function (element) {
    let letter = element.toLowerCase();
    if (vowels.includes(letter)) {
      if (vowelObj[letter]) {
        vowelObj[letter]++;
      } else {
        vowelObj[letter] = 1;
      }
    }
  });
  return vowelObj;
}
console.log(vowelCount("hmmmm"));

/* -----------MAP-------------*/

// doubleValuesWithMap - Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValuesWithMap(arr) {
  return arr.map(function (element) {
    return element * 2;
  });
}

// valTimesIndex - Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(arr, i) {
  return arr.map(function (element, i) {
    return element * i;
  });
}

// extractKey - Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(arrObj, key) {
  return arrObj.map(function (element) {
    return element[key];
  });
}

//extractFullName - write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of "last" in each object, concatenated together with a space between them.

function extractFullName(arrObj) {
  return arrObj.map(function (element) {
    return element.first + " " + element.last;
  });
}
/* -------------Filter------------*/

//filterByValue - Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arrObj, key) {
  return arrObj.filter(function (element) {
    return element[key];
  });
}

// find - Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, value) {
  let returnValue = arr.filter(function (val) {
    return val === value;
  });
  //   return returnValue !== [] ? returnValue : undefined;
  return JSON.stringify(returnValue) !== "[]" ? returnValue : undefined;
}

//findInObj - Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(arrObj, key, value) {
  return arrObj.filter(function (obj) {
    return obj[key] === value;
  });
}

// removeVowels - Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter(function (element) {
      // kind of like includes or contains (which give a boolean), this gives -1 if it's not in the array and otherwise will give you the index of the character
      //   return vowels.indexOf(element) === -1;
      return !vowels.includes(element);
    })
    .join("");
}

// doubleOddNumbers - Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
function doubleOddNumbers(arr) {
  return arr
    .filter(function (element) {
      return element % 2;
    })
    .map(function (val) {
      return val * 2;
    });
}
