/** SETS */
/** No Duplicate values, No particular order */
/** function: add, remove, values, size, Union, Subset, Difference and Intersection */

function mySet() {
  let collection = [] //will work as storage of set

  //check for duplicate values
  this.has = function (element) {
    return collection.indexOf(element) !== -1
  }

  //return all the values of the elements of the set
  this.values = function () {
    return collection
  }

  //Add element in the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  // Remove an element in the set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  //Return the size of the set
  this.size = function () {
    return collection.length
  }

  //Return Union of Two sets
  this.union = function (otherSet) {
    let unionSet = new mySet()
    let firstSet = this.values()
    let secondSet = otherSet.values()

    firstSet.forEach((e) => unionSet.add(e))
    secondSet.forEach((e) => unionSet.add(e))

    return unionSet
  }

  this.intersection = function (otherSet) {
    var intersectionSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }
  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet
  }
  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values()
    return firstSet.every(function (value) {
      return otherSet.has(value)
    })
  }
}

var setA = new mySet()
var setB = new mySet()
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
console.log('is setB subset of setA', setA.subset(setB))
console.log('setA intersection setB', setA.intersection(setB).values())
console.log('setB diffecence setA', setB.difference(setA).values())
console.log('setA union setB', setA.union(setB).values())
