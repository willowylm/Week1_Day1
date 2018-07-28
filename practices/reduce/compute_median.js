'use strict';

function compute_median(collection) {
  //在这里写入代码
var result=[];

if(collection.length%2!=0)
{
 return collection[collection.length/2];
}
else if(collection.length%2==0)
{
  var result=(collection[collection.length/2-1]+collection[collection.length/2])/2;
  return result;
}

return result;
}

module.exports = compute_median;


