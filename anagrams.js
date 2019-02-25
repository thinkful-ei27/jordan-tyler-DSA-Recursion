
function doPerm(str, arr, permutations = []) {
  if (typeof (str) === 'string') str = str.split('');
  if (str.length === 0) permutations.push(arr.join(''));
  for (let i = 0; i < str.length; i++) {
    let x = str.splice(i, 1);
    arr.push(x);
    doPerm(str, arr, permutations);
    arr.pop();
    str.splice(i, 0, x);
  }
  return permutations
}
console.log(doPerm('east', []));