'use strict';
const str = 'hello';
const reverseString = (string) => {
  if(string.length === 0){
    return '';
  }

  return string.slice(-1) + reverseString(string.substring(0, string.length-1));

};

console.log(reverseString(str));