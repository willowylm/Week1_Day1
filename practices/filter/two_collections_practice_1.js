'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码  
  var result = [];
  collection_a.forEach(element => {
    if(collection_b.indexOf(element) != -1) {
      result.push(element);
    }
  });
  return result;
}

module.exports = choose_common_elements;
