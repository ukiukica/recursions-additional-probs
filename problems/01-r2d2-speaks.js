/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms

    There are no mocha tests for this code.
    Run the following two lines beneath the function
    to see if your code demonstrates the expected behavior.

*/

// setTimeStop:
// If preceding element is

function r2d2Speaks(code) {
    for (let i = 0; i < code.length; i++) {
        if (code[i] === 0) {setTimeout(() => console.log("beep"), 800)};
        if (code[i] === 1) {setTimeout(() => console.log("boop"), 400)};
        // if (code[i] === 0) console.log("beep")
        // else console.log("boop");
        // if (code[i - 1] === 0)
    }
}



let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
