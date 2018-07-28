'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = collection_a;

  collection_b.forEach(elementb => {
    var isSame = false;
    collection_a.forEach(elementa => {
      if (elementb === elementa) {
        isSame = true;
      }
    });
    if (!isSame) {
      result.push(element);
    }
  });

  return result;
}

module.exports = get_union;

