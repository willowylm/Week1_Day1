'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码

  var result = collection.filter((element, index, self) =>{
    return self.indexOf(element) === index;
  });

  return result;
}

module.exports = choose_no_repeat_number;
