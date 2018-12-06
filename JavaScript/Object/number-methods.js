let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)



//text 

let makeGuess = function(guess){
    let maxNum = 5;
    let minNum = 1;
    let randomGuess = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    return guess === randomGuess
}

console.log(makeGuess(1))