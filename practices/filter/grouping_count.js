'use strict';

function grouping_count(collection) {

  //在这里写入代码

  let result = {}
  collection.forEach(element => {
    if(result[element] === undefined) {
      result[element] = 1;
    } else {
      result[element]++;
    }
  });
return result;

}

module.exports = grouping_count;
