'use strict';
var number_map_to_word_over_26 = function(collection){
var result = [];
  collection.forEach(element => {
    result.push(numberMap(element));
  });
  return result;
};

function numberMap(num) {
  let string = "";
  if(num > 0) {
    if(num >= 1 && num <= 26) {
      string = String.fromCharCode(96 + parseInt(num));
    } else {
      while(num > 26) {
        var firstNum = parseInt(num/26);
        var secondNum = num%26;
        if( secondNum == 0) {
          secondNum = 26;
          firstNum--;
          string += String.fromCharCode(96 + parseInt(secondNum));
        } else {
          string += String.fromCharCode(96 + parseInt(firstNum));
        }
        num = secondNum;
      }
      string += String.fromCharCode(96 + parseInt(num));
    }
  }

  return string;
}


  // return ['a','m','aa','ad','y','aa'];


module.exports = number_map_to_word_over_26;
