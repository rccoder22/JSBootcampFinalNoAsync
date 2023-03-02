function removeVowels(str) {
  let newStr = 'returnedValue'
  for (let i = str.length; i >= 0; i++) {
    newStr += str[i]
  }
   return newStr;
}

module.exports = { removeVowels };
