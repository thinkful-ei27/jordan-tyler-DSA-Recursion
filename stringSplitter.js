'use strict'

function stringSplitter(str, sep, currentStr = "") {
  if (str === "") {
    if (!currentStr) {
      return [];
    } else {
      return [currentStr];
    }
  }
  if (str[0] === sep) {
    return [currentStr, ...stringSplitter(str.slice(1), sep)];
  } else {
    currentStr = currentStr + str[0]
    return stringSplitter(str.slice(1), sep, currentStr);
  }
}

console.log(stringSplitter("dog.bark.bite.", "."));