//Function : input (argument), code, output(return value)

let greetUser = function() {
    console.log('Welcome!')
}
greetUser()

let square = function (num) {
    let result = num * num;
    return result
}
let value = square(3)
let otherValue = square(10)


console.log(value)
console.log(otherValue)




//function test
let celsius = function(temp){
    let result = (temp - 32) * 5 / 9;
    return result
}

let tempValue = celsius(32)
let tempValueTwo = celsius(68)

console.log(tempValue)
console.log(tempValueTwo)