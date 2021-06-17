//Palindrome with reversing the string

const reverse = (str) => {
	let str_rev = ''
	for (let i = str.length - 1; i >= 0; i--) {
		str_rev += str[i]
	}
	return str_rev
}

const isPalindrome = (str) => {
	const reverse_string = reverse(str)

	if (str === reverse_string) return true
	return false
}

console.log(isPalindrome('racecar'))
