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
const noiseChoice = num => num ? "boop" : "beep";
const pauseResponse = num => num ? 2000 : 1000;
// const noise = choice => console.log(choice);
function r2d2Speaks(code) {
    console.log(noiseChoice(code[0]));
    for (let i = 1; i < code.length; i++) {
        let num = code[i];
        let prevNum = code[i - 1];
        let delay = pauseResponse(prevNum);
        setTimeout(() => {
            console.log(noiseChoice(num));
        }, delay);
    };
};



let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
