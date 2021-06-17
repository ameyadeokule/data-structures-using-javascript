// Function for masking the character
function MaskCharacter(str, mask, n = 1) {
	// Slice the string and replace with
	// mask then add remaining string
	return ('' + str).slice(0, -n).replace(/./g, mask) + ('' + str).slice(-n)
}

// Number that we want to mask
var num = 12345678

// Convert number into string
var str = num.toString()

// Call function without giving value of n
console.log(MaskCharacter(str, '#'))

// Call function with giving value of n=2
console.log(MaskCharacter(str, '#', 2))
