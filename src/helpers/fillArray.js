function fillArray(size) {
  let tempArr = [];

  for (let i = 0; i <= size; i++) {
    tempArr.push(i < 10 ? ("0" + i.toString()) : i.toString());
  }
  return tempArr;
}

export default fillArray;