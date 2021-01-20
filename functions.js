const identity = function (value) {
  return value
};

// const first = function (array, n) {
//   let result = []
//   if (n === undefined) {
//     return array[0]
//   }
//   for (let i = 0; i < n; i++) {
//     if (i < array.length) {
//       result.push(array[i])
//     }
//   } return result
// };

const first = function (array, n) {
  return n === undefined ? array[0] : array.slice(0, n)
}

// const last = function (array, n) {         // 1.  If n is undefined , meaning missing, the entire array will be returned. 
//   let result = []                          // 2. Making a new array to push the filtered items into.  
//   if (n === undefined)
//     return array.length

//   for (let i = 0; i < n; i++)              // 3. Looping through the entire array to find the items we want returned.
//     if (i < array.length) {
//       result.push(array[i])                // 4. Will continue looping in increments of 1 until [i] has reached the end of the array.length
                                           // 5 Any time i is less than the number corresponding to the arrays length, it gets pushed into to the new array.
//     }


//   return result                            // 6. The new array is returned to satisfy the test.
// };

const last = function (array, n) { 
  return n === undefined ? array.length : array.slice(0, n)
}


last([1, 2, 3], 2)//?

// const each = function (collection, iterator) {
//   return collection.forEach(iterator)
// }

const each = function (collection, iterator) {
  let result = []

  for (let i = 0; i < collection.length; i++) {
    result.push(iterator(collection[i]))
  }
  return result
}

function add2(num) {
  return num + 2
}

const indexOf = function (array, target) {
  return array.indexOf(target)
};
const map = function (collection, iterator) {
  return collection.map(iterator)
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};


