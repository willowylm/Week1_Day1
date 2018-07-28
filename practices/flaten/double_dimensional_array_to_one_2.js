'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  let result = new Set();

  collection.forEach(element => {
    if(element instanceof Array) {
      element.forEach(ele => {
        arr.push(ele);
      });
    } else {
      arr.push(element);
    }
  });

  arr.forEach(element => {
    result.add(element);
  });

  return Array.from(result);
}

module.exports = double_to_one;
