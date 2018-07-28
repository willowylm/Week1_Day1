'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  collection_a.forEach(element => {
    if(collection_b.indexOf(element) == -1){
      return false;
    }
  });
  return true;
}

module.exports = compare_collections;


