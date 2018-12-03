// Multiple argument
let add = function (a, b, c) {
    return a + b + c
}
let result = add(10, 1, 5)

console.log(result)

// default arguments
let getScoreText = function (name = 'vaibbhav', score = 0) {
    return 'Name: ' + name + ' - Score:' + score
}
/* First value *///let scoreText = getScoreText('jack')
/* Second value */let scoreText = getScoreText(undefined, 0)
console.log(scoreText)




// arguments test



// let getTip = function (total, tipPercent = .25) {
//     return `${total}` *  `${tipPercent}`
// }
// let tip = getTip(40)
// console.log(tip) 

/////////////////

let name = 'vaibbhav'
console.log(`Hey, my name is ${name}!`) 

//////////////////


let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent} % tip on $${total} would be $${tip}`
}
let tip = getTip(40,.25)
console.log(tip) 
