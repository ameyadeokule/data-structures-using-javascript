function reverseNumber(n) {
  if(n<0){
    return parseInt( n.toString().split('').reverse().join('')) * -1
  }
  else{
    return parseInt( n.toString().split('').reverse().join(''))
  }

}

reverseNumber(15)
