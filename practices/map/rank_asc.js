'use strict';
var rank_asc = function(collection){
  // return [6,5,4,3,2];

  for(let i=0; i<collection.length; i++) {
    for(let j=i; j<collection.length; j++) {
        if(collection[i]  < collection[j]) {
            let tmp = collection[i];
            collection[i] = collection[j];
            collection[j] = tmp;
        }
    }
  }

  return collection;
};

module.exports = rank_asc;
