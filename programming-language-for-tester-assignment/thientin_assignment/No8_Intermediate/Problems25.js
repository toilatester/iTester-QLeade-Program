function findLongestWord(sentence) {
    const words = sentence.split(' ');
    const sortedWords = words.sort((a, b) => b.length - a.length);
    const longestWord = sortedWords[0] || '';
    return longestWord;
}
console.log(findLongestWord('JavaScript is awesome'));  
console.log(findLongestWord('Pikachu Nobita Doraemon'));  
