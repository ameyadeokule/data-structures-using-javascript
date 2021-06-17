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

//Palindrome without reversing the string

const check_palindrome = (str) => {
	let j = str.length - 1
	for (let i = 0; i < j / 2; i++) {
		let x = str[i] //forward character
		let y = str[j - i] //backward character
		if (x != y) {
			// return false if string not match
			return false
		}
	}
	/// return true if string is palindome
	return true
}

const isPalindrome2 = (str) => {
	return (_isPalindrome = check_palindrome(str))
}

console.log(isPalindrome2('racecar'))
