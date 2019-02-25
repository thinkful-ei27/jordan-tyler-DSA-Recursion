'use strict';

const countSheep = (num) => {
  if (num === 0) {
    return;
  }
  console.log(num + ' Another sheep jumped over the fence');
  countSheep(num - 1);
};

countSheep(4);

