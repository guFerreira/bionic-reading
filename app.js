const readline = require('readline');
const wordService = require('./wordService')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (phrase) => {
  console.log('\n Transformed text: \n \n')
  const text = wordService.transformPhrase(phrase)

  console.log(text)

  rl.close();
});
