'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  // var rresult = [];
  // for(var i=0;i<collection.length;i++){
  //   if(collection[i]%2==0)
  //      rresult.push(collection[i]);
  // }
  // collection.forEach(element => {
  //   if(element%2==0){
  //     rresult.push(element)
  //   }
  // });
  return collection.filter((element)=>{
    return element%2==0;
  })
 
}

module.exports = collect_all_even;
