'use strict';

function compute_average(collection) {
  //在这里写入代码
  let sum = 0;
  for(let i = 0;i < collection.length; i++)
   {
     sum += collection[i];
   }

   let result = sum/collection.length;

   return result;
}

module.exports = compute_average;

