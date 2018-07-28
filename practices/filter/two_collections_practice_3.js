'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码

  let result = [];
  collection_a.forEach(elementa => {
    for(let elementb of collection_b) {
      if(elementa % elementb == 0) {
        result.push(elementa);
        break;
      }
    }
  });
 
  return result;

}

module.exports = choose_divisible_integer;
