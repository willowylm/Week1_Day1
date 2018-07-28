function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = [];
  collection_a.forEach(element => {
    let subCollectionB = object_b["value"];
    if(subCollectionB.indexOf(element) != -1) {
      result.push(element);
    }
  });
  return result;
}

module.exports = collect_same_elements;
