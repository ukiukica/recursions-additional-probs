/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Do not use the built-in Array#slice method.

    If the start index is less than 0 the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
    slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(2,4);
    console.log(slicer([0, 1, 2, 3])); // prints [ 2, 3 ]
    console.log(slicer([2, 4, 'hello', false])); // prints ['hello', false]

    const slicer2 = dynamicSlice(-2, 10);
    console.log(slicer2([0,1,2,3])); // prints [0, 1, 2, 3]
*/

function dynamicSlice(start, end) {

    let sliced = arr => {
        let slicedArr = [];
        let startIdx;
        let endIdx;
        if (start < 0 ) startIdx = 0;
        else startIdx = start;
        if (end > arr.length - 1) endIdx = arr.length - 1;
        else endIdx = end;
        for (let i = startIdx; i <= endIdx; i++) {
            slicedArr.push(arr[i]);
        };
        return slicedArr;
    };


    return sliced;
}



const slicer = dynamicSlice(2,4);
console.log(slicer([0, 1, 2, 3])); // prints [ 2, 3 ]
console.log(slicer([2, 4, 'hello', false])); // prints ['hello', false]

const slicer2 = dynamicSlice(-2, 10);
console.log(slicer2([0,1,2,3])); // prints [0, 1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicSlice;
} catch (e) {
    module.exports = null;
}
