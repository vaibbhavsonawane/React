let myBook = {
     title: '1984',
     author: 'George Oewell',
     pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// test

let person ={
     name: 'Vaibbhav',
     age: 30,
     city: 'pune'
}
console.log(`${person.name} is ${person.age} and lives in ${person.city}`)

person.age = person.age  +1

console.log(`${ person.name } is ${ person.age } and lives in ${ person.city }`)