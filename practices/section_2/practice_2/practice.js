function count_same_elements(collection) {
  //在这里写入代码
  let result = new Map();
  collection.forEach(element => {
    if(result.get(element) == null) {
     if(element.indexOf('-') != -1) {
        let tmp = element.split('-');
        result.set(tmp[0], parseInt(tmp[1]));
      } else {
        result.set(element, 1);
      }
    } else {
      result.set(element, result.get(element) + 1)
    }
  });


  let ret2 = [];
  
  let keyArray = Array.from(result.keys());

  keyArray.forEach(element => {
    let obj = {};
    obj["key"] = element;
    obj["count"] = result.get(element); 
    ret2.push(obj);
  });
  return ret2;
}

module.exports = count_same_elements;
