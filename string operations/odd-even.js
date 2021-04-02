function oddOrEven(array) {

  lengthArr = array.length

   for(let i=0; i<lengthArr; i++){
     if(i+1 <= lengthArr) array[i+1] += array[i]
   }
  if(array[lengthArr-1] %2 === 0) {
    return 'even'
  } else{
    return 'odd'
  }
}

console.log(oddOrEven([2,3,5]))
console.log(oddOrEven([0, -1, -5]));
