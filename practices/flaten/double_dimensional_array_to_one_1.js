'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];

  collection.forEach(element => {
    if(element instanceof Array) {
      element.forEach(ele => {
        result.push(ele);
      });
    } else {
      result.push(element);
    }
  });

  return result;
}

module.exports = double_to_one;
