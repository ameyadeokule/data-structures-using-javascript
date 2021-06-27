const highestAndLowest = (numberString) => {
	const numberArray = numberString.split(' ').sort((a, b) => a - b)
	return [numberArray[0], numberArray[numberArray.length - 1]]
}

const [lowest, highest] = highestAndLowest('5 6 1 2 77 3 12')

console.log(lowest, ' is the lowest number')

console.log(highest, ' is the highest number')
