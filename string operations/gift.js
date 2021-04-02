var buy = function(x, arr){
  if (arr.length <= 1) return null

  for(let i=0; i<arr.length; i++){
    const remainder = x - arr[i]
    for (let j = 1; j < arr.length; j++) {
      if(arr[j] === remainder) {
        return [i, j]
      }
    }
  }

  return null
};

console.log(buy(3,[1,1,2]));
