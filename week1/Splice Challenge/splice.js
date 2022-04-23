const splice = function (array, start, deleteCount) {
    let arrLen = array.length
    let result = []
    let removed = []
    let argsLen = arguments.length;
    if (start == -Infinity) {
        start = 0
    }
    else if (start < 0) {
        Math.max(arrLen + start, 0)
    }
    else {
        Math.min(start, arrLen)
    }
    if (deleteCount <= 0) {
        deleteCount = 0;
    }
    else if (deleteCount > (arrLen - start) || !deleteCount) {
        deleteCount = arrLen - start;
    }
    for (let i = 0; i < start; i++) {
        result[i] = array[i];
    }
    for (let i = 3; i < argsLen; i++) {
        result.push(arguments[i]);
    }
    for (let i = start; i < start + deleteCount && deleteCount != 0; i++) {
        removed.push(array[i]);
    }
    for (let i = start + deleteCount; i < arrLen; i++) {
        result.push(array[i]);
    }
    array.length = 0;
    let i = result.length;
    while (i--) {
        array[i] = result[i];
    }
    return removed;
}

// remove 1 element
let arr = [1, 2, 3]
splice(arr, 0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3]
splice(arr, 0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1, 2, 3]
splice(arr, 0, 0, -1, 0);
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1, 2, 3]
splice(arr, 1, 1, 55);
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1, 2, 3, 4, 5]
splice(arr, 1);
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1, 2, 3]
let deleted = splice(arr, 1);
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1, 2, 3]
deleted = splice(arr, 1, 1);
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1, 2, 3]
deleted = splice(arr, 1, 0, 5);
console.log(deleted); //should be [] 