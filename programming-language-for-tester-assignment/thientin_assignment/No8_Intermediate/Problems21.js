function countOccurrences(str, char) {
    const charArray = str.split('');
  
    const matchingChars = charArray.filter(character => character === char);
  
    return matchingChars.length;
  }
  
  const inputString = 'hello';
  const charToCount = 'l';
  const result = countOccurrences(inputString, charToCount);
  console.log(result);