// let myAccount={
//     name: 'jack',
//     expenses: 0,
//     income: 0
// }
// let addExpense = function(account, amount){
//     account.expenses = account.expenses + amount
//     console.log(account)
// }
// addExpense(myAccount, 2.50)
// console.log(myAccount)


//text
let vaibbhavAccount = {
    name: 'vaibbhav',
    expenses: 0,
    income: 0
}

let addIncome = function(account,income){
    account.income = account.income + income
}
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome(vaibbhavAccount, 2000)
addExpense(vaibbhavAccount, 2.50)
addExpense(vaibbhavAccount, 160)
console.log(getAccountSummary(vaibbhavAccount))
resetAccount(vaibbhavAccount)
console.log(getAccountSummary(vaibbhavAccount))