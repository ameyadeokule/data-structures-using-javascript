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
