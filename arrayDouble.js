'use strict'

function arrayDouble(arr) {
  if (arr.length === 0) {
    return [];
  }
  const doubledNum = arr[0] * 2;
  return [doubledNum, ...arrayDouble(arr.slice(1))];

}

console.log(arrayDouble([2, 4, 6, 8]))