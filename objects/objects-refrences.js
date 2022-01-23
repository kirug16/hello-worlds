let myAccount = {
    name: 'Kirubel',
    expenses: 0, 
    income: 0
}

let addExpense = function(account, amount) {
   account.expenses = account.expenses + amount
}

let addIncome = function(account, income){
    account.income = account.income + income
}

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
}


let getAccountSummary = function(account) {
    let summary = account.income - account.expenses
    return `Account for ${account.name} has $${summary}. $${account.income}. $${account.expenses} in expenses`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

