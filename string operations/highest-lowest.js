const sortString = (string) => string.split(' ').sort((a, b) => a - b)

const highestAndLowest = (numberString) => {
	const numberArray = sortString(numberString)
	return [numberArray[0], numberArray[numberArray.length - 1]]
}

const [lowest, highest] = highestAndLowest('5 6 1 2 77 3 12')

console.log(lowest, ' is the lowest number')

console.log(highest, ' is the highest number')

//Sum of the highest and lowest numbers in the string

const sumOfLowest = (numberString) => {
	const [firstNumber, secondNumber] = sortString(numberString)

	return +firstNumber + +secondNumber
}

console.log(sumOfLowest('5 6 1 2 77 3 12'))

const sumOfHighest = (numberString) => {
	const numberArray = sortString(numberString)
	const length = numberArray.length
	return +numberArray[length - 1] + +numberArray[length - 2]
}

console.log(sumOfHighest('5 6 1 2 77 3 12'))
