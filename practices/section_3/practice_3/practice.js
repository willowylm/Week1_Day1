function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let res = new Map();
  collection_a.forEach(element => {
    if(res.get(element) == null) {
      res.set(element, 1);
    } else {
      res.set(element, res.get(element) + 1)
    }
  });

  let ret = [];
  
  let keyss = Array.from(res.keys());

  keyss.forEach(element => {
    let obj = {};
    obj["key"] = element;
    obj["count"] = res.get(element); 
    ret.push(obj);
  });

  object_b["value"].forEach(elementb => {
    ret.forEach(elementa => {
      if(elementa["key"] == elementb) {
        elementa["count"] -= parseInt(elementa["count"]/3);
      }
    });
  });
  return ret;
}

module.exports = create_updated_collection;
