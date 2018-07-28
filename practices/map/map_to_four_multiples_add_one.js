'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = [];
  collection.forEach(element => {
    result.push(element*4+1);
  });
  
  return result;
  // return [5,9,13,17,21];
};

module.exports = map_to_four_multiples_add_one;
