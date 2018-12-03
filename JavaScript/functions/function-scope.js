let celsius = function (temp) {
    let result = (temp - 32) * 5 / 9;
    return result
}

let tempValue = celsius(32)
let tempValueTwo = celsius(68)

console.log(tempValue)
console.log(tempValueTwo)