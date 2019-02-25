'use strict';

const factorial = (num) => {
  if(num === 1){
    return 1 * num;
  }

  return num * factorial(num-1);

};

console.log(factorial(3));