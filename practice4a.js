//console.log("har\"".length)
const sentence="The quick brown fox jumps over the lazy dog.";
const word='The';
console.log(`the word "${word}" ${sentence.startsWith(word)? 'is' : 'is not'} in the sentence`);