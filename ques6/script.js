function mergeObjects(...objects) {
    let result = {};
  
    objects.forEach(obj => {
      for (let key in obj) {
        if (result[key] !== undefined) {
          if (Array.isArray(result[key]) && Array.isArray(obj[key])) {
            // If both values are arrays merge them
            result[key] = result[key].concat(obj[key]);
          } else if (typeof result[key] === 'object' && typeof obj[key] === 'object') {
            // If both values are objects merge them used recursion for it
            result[key] = mergeObjects(result[key], obj[key]);
          } else {
            // for other cases override with the new value
            result[key] = obj[key];
          }
        } else {
          // If the key does not exist in the result then add it
          result[key] = obj[key];
        }
      }
    });
  
    return result;
  }
  
  let obj1 = { a: 4, b: 6  };
  let obj2 = { a: 7,c: 2, d: 5 };
  
  let merged_obj = mergeObjects(obj1, obj2);
  console.log(merged_obj);
  