

function transformWord(word){
  if (word.length <= 1) {
    return word
  }

  if (word.includes(' ')) {
    throw new Error('A palavra é uma frase')
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

function transformPhrase(phrase) {
  const pharseSplited = phrase.split(' ')
  const words = []
  for (const word of pharseSplited) {
    const transformedWord = transformWord(word)
    words.push(transformedWord)
  }
  return words.join(' ')
}

module.exports = {
  transformWord,
  transformPhrase
}


