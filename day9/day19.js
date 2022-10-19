
// CLOSURES
// Exercises: Level 1
// Create a closure which has one inner function
function outerFunction (){
    let count = 5;
    function innerFunction(){
        count+=3
        return count
    }
    return innerFunction
}
const closure = outerFunction()
console.log(closure())




// Exercises: Level 2
// Create a closure which has three inner functions
function outerFunc(){
    let sentence= 'My name is'
    function innerFunc1(){
        return `${sentence} Tade`
    }
}


// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// 🎉 CONGRATULATIONS ! 🎉