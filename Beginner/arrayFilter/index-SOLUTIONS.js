

 // An Imperative Approach
 
 function arrayFilter(arr, func) {
    for (let elem of arr) {
      if (func(elem)) {
        return elem
      }
    }
    return undefined
  }

  // Using .filter()

  function arrayFilter(arr, func) {
    let filteredArray = arr.filter(func);
    return filteredArray[0] ? filteredArray[0] : undefined;
  }

  // Using .find()

  function arrayFilter(arr, func) {
    return arr.find(func)
  }

  
  