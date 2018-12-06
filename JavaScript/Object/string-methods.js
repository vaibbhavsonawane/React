let name = ' Vaibbhav Sonawane ';

//length property
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

// convert to Lower Case
console.log(name.toLowerCase())

//includes methads
let password = 'asdqwe123';
console.log(password.includes('password'))
 
//trim
console.log(name.trim())


// test

let isValidPassword = function(password){
    // if (password.length > 8 && !password.includes('password')){
    //     return true
    // } else {
    //         return false
    // }
    //or
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdqwe'))
console.log(isValidPassword('asd123qwe'))
console.log(isValidPassword('asd123qwepassword'))
