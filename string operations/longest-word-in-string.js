// Longest word using Array

const longest = (str) => {
	// Split the string into array
	str = str.split(' ')
	// Return the first sorted item of the Array
	return str.sort((a, b) => b.length - a.length)[0]
}

console.log(
	longest(
		'Hello guys this is a test' +
			' It tests for longest word in the string which is supposed to be mississippi',
	),
)

//Longest word using regex
const longestUsingRegex = (str) => {
	// Split the string using regex
	str = str.match(/[a-zA-Z0-9]+/gi)
	// Creating a empty string to store largest word
	let largest = ''

	// Creating a for...loop to iterate over the array
	for (let i = 0; i < str.length; i++) {
		// If the i'th item is greater than largest string
		// then overwrite the largest string with the i'th value
		if (str[i].length > largest.length) {
			largest = str[i]
		}
	}
	return largest
}

console.log(
	longestUsingRegex(
		'Hello guys this is a test' +
			' It tests for longest word in the string which is supposed to be mississippi',
	),
)
