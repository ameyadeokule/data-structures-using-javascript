function alphabetPosition(text) {
  const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const result = []
  const textArr = text.replace(/[\.,!\?]/g, '').toLowerCase().split('')
  textArr.forEach((letter) => {
    if(alph.includes(letter)){
        result.push(alph.indexOf(letter) + 1)
    }
  });

  return result.join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
