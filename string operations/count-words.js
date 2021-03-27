const words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit enim, a dignissim nulla. Ut congue tortor a orci viverra, non efficitur est tempor. Sed in porttitor ipsum, vel suscipit enim. Nam at placerat augue. Proin tempus quis augue a eleifend. Etiam euismod neque diam, vel sit tempus eros semper ut. Donec nec urna sit amet tellus mattis blandit. Donec fermentum fringilla ante id lobortis. Vestibulum et libero vitae urna sit tincidunt tristique.'


const wordsSplit = words.replace(/[\.,!\?]/g, '').split(' ')

const wordsMap = new Map()

wordsSplit.forEach((word) => {
  let count = wordsMap.has(word) ? wordsMap.get(word) : 0
  wordsMap.set(word, count += 1)
});

console.log(wordsMap);
