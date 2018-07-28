'use strict';
function map_to_even(collection){
 var result = [];
  collection.forEach(element => {
    result.push(element*2);
  });
  
  return result;
  // return [2,4,6,8,10];
}
module.exports = map_to_even;
