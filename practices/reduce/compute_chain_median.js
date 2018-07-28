'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let array = collection.split('->');
  let numarray = [];
  array.forEach(element => {
    numarray.push(parseInt(element));
  });
  let len = array.length;
  
  for(let i=0; i<numarray.length; i++) {
    for(let j=i; j<numarray.length; j++) {
      if(numarray[i] > numarray[j]) {
        let tmp = numarray[i];
        numarray[i] = numarray[j];
        numarray[j] = tmp;
      }
    }
  }

  if(len % 2 == 0) {
    return (numarr[len/2]+numarr[len/2-1])/2;
  } else {
    return numarr[parseInt(len/2)];
  }
}

module.exports = compute_chain_median;
