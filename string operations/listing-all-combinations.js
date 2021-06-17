let possibleCombinations = (str) => {
	let combinations = []
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length + 1; j++) {
			combinations.push(str.slice(i, j))
		}
	}
	return combinations
}
console.log(possibleCombinations('Dog'))

//2nd approach
let combinations = (str) => {
	let tempArr = []
	let resultArr = []
	for (let i = 0; i < str.length; i++) {
		tempArr = [str[i]]
		let index = 0
		while (resultArr[index]) {
			tempArr.push('' + resultArr[index] + str[i])
			index++
		}
		resultArr = resultArr.concat(tempArr)
	}
	return resultArr
}
console.log(combinations('Dog'))
