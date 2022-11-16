// 374. Guess Number Higher or Lower

// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.


// Input: n = 2, pick = 1
// Output: 1
 
let input = 10;
let pick = 6;

input = 1;
pick = 1;

input = 2;
pick = 1;

// input = 2126753390;
// pick = 1702766719;

let guess = function(x) {
    if (x > pick) {
        return -1;
    } else if (x < pick) {
        return 1;
    } else {
        return 0;
    };
};




var guessNumber = function(n) {
    let currentGuess = Math.round(n/2);
    let currentMax = n;
    let currentMin = 1;

    if (guess(1) === 0) {
        return 1;
    }
 
    while (guess(currentGuess) !== 0) {
    
        if (guess(currentGuess) === 1) {
            currentMin = currentGuess;
            currentGuess = Math.round((currentMax-currentMin)/2)+currentMin;
        } else if (guess(currentGuess) === -1) {
            currentMax = currentGuess;
            currentGuess = Math.floor(currentMax/2);
        };
    };
    return currentGuess;
    };

console.log(guessNumber(input));

// console.log(Math.round(input/2));