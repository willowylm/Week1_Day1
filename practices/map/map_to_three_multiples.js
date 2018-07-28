'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  collections.forEach(element => {
    result.push(element*3);
  });
  
  return result;

  // return [3,9,15,12,27];
};

module.exports = map_to_three_multiples;
