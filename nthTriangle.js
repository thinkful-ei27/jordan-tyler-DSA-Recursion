'use strict';

function nthTriangular(n) {
  if(n <= 1){
    return n;
  }
  return n + nthTriangular(n-1);
}

console.log(nthTriangular(3));