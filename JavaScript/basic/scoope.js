// Lexical Scope (Static Scoop)

//Global Scope : Defined outside of all code blocks
// Local Scope : Defined inside a code block

//Global Scope (varOne)
    //Local Scope (varTwo)
        //Local Scope (varFour)
    //Local Scope (varThree)
let varOne = 'varOne';

if(true){
    console.log(varOne)
    let varTwo = 'varTwo';
    if(true){
        let varFour = 'varFour';
    }
}
if (true){
    let varThree = 'varThree';
}
console.log(varTwo) 