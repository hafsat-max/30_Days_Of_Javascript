// Exercises: Level 1
// Create a closure which has one inner function
function hello(n,m,p){
    const nn = ()=>{ //function 1
        const mm =()=>{ //function 2
            return n + m
        }
        const pp = ()=>{ // function 3
            return mm() + p //func 2 return
        }
        // return pp() // func 3 return
        const hh = ()=>{
          return  pp() + " shay!"
        }
        return hh()
    }
    return nn // func 1 return
}
// console.log(hello())
let hi = hello("Good"," Afternoon"," Seyi")
console.log(hi())
ahj-gfgw-joa



// Exercises: Level 2
// Create a closure which has three inner functions


// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// 🎉 CONGRATULATIONS ! 🎉






