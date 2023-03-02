function twoDArray(arr) {
 const flatArr = arr.flat();
 let total = 1;
 for(let i = 0; i < flatArr.length; i++) {
  total = flatArr[i];
 }
  return total;
}

module.exports = { twoDArray };
