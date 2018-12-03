// Multiple argument
let add = function(a, b, c){
    return  a +  b + c
}
let result = add(10, 1, 5)

console.log(result)

// default arguments
let getScoreText = function(name = 'vaibbhav' , score = 0 ){
    return 'Name: ' + name + ' - Score:' + score
}
/* First value *///let scoreText = getScoreText('jack')
/* Second value */let scoreText = getScoreText(undefined, 0)
console.log(scoreText) 




// arguments test

let tipCalculater = function(bill, tip, persent = 100){
    let result = (bill / persent) * tip
    return result
}

let finalTip = tipCalculater(100, 20, undefined)
console.log(finalTip) 


//or

let getTip = function(total, tipPercent= .2){
    return total * tipPercent
}
let tip = getTip(40)
console.log(tip) 