const balls = ['r', 'b', 'r', 'b', 'r', 'r', 'r', 'b', 'r', 'b', 'r']

function segregateRandB(arr, n) {
	let type0 = 0
	let type1 = n - 1

	while (type0 < type1) {
		if (arr[type0] === 'b') {
			// swap type0 and type1
			const temp = arr[type0]
			arr[type0] = arr[type1]
			arr[type1] = temp
			type1--
		} else {
			type0++
		}
	}
	return arr
}

console.log(segregateRandB(balls, balls.length))
