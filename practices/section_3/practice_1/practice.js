function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  object_b["value"].forEach(elementb => {
    collection_a.forEach(elementa => {
      if(elementa["key"] == elementb) {
        elementa["count"]--;
      }
    });
  });
  return collection_a;

}

module.exports = create_updated_collection;
