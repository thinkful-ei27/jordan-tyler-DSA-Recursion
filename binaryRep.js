// write a recursive function that prints the binary representation of a given number

'use strict';

const binaryRep = (num) => {
  if(num === 0){
    return '';
  }
  const binary = Math.floor(num % 2);
  return binaryRep(Math.floor(num / 2)) + binary;
};