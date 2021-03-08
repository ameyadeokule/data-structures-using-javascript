/**Stacks */

const { func } = require('prop-types')

/**Funcitons : push, pop, peek, length */

//! Using array as an stack

let letters = [] // array as stack
let word = 'racecar'
let rword = ''

/**putitng letters of the word in the stack */
for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

//console.log(letters)

/**pop of stack in reverse order */
for (let i = 0; i < word.length; i++) {
  rword += letters.pop()
}

//console.log(rword)

/**Create a Stack */

let Stack = function () {
  this.count = 0
  this.storage = {}

  //! Push the value on top of the stack

  this.push = function (value) {
    this.storage[this.count] = value
    this.count++
  }

  //! Pop the value from top of the stack

  this.pop = function () {
    let result = ''
    if (this.count === 0) {
      result = 'The stack is empty'
      return result
    }
    this.count--
    result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  //! Show the size of the stack

  this.size = function () {
    return this.count
  }

  //! Show the value at top of the stack

  this.peek = function () {
    return this.storage[this.count - 1]
  }
}

let myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.peek())
console.log(myStack.size())
console.log(myStack.pop())
console.log(myStack.size(), myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
