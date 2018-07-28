'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];

  collection_a.forEach(elementa => {
    collection_b.forEach(elementb => {
      if(elementa == elementb)
       {
         result.push(elementa);
       }
    })
    
  });

  return result;
}

module.exports = get_intersection;
