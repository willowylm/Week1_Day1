function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = [];
  let targetCollectionA = [];
  collection_a.forEach(element => {
    targetCollectionA.push(element["key"]);
  });
  targetCollectionA.forEach(element => {
    let targetCollectionB = object_b["value"];
    if(targetCollectionB.indexOf(element) != -1) {
      result.push(element);
    }
  });
  return result;
}

module.exports = collect_same_elements;
