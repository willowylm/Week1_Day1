'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
 var result = []; 
 var max = (number_a >= number_b?number_a:number_b)
 var min = (number_a <= number_b?number_a:number_b)
 
   for(let i = max; i <= min; i++)
   {
    result.push (String.fromCharCode(96 + i))    
   }

   return result;

}

module.exports = get_letter_interval_2;

