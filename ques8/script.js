function array_Clone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  let arr=[1, 2, 4, 0];
  let clonedArray=array_Clone(arr);
  console.log(clonedArray)
  