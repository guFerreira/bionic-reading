

function transformWord(word){
  if (word.length <= 1) {
    return word
  }
  const halfWord = Math.round(word.length / 2)

  const letters = []
  letters.push('*')
  for (let i = 0; i < halfWord; i++) {
    const letter = word[i];
    letters.push(letter)
  }
  letters.push('*')

  for (let i = halfWord; i <= word.length; i++) {
    const letter = word[i];
    letters.push(letter)
  }

  return letters.join("")
}

module.exports = {
  transformWord
}


