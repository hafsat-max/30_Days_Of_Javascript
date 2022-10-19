// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name,age,color, legs){
        console.log(this)
        this.name= name
        this.age=age
        this.color = color
        this.legs = legs
    }
    getFullName() {
        const fullDetails =`A ${this.name} is of age ${this.age} and has ${this.legs} legs with ${this.color} color.`
         return fullDetails
      }
}

// Create a Dog and Cat child class from the Animal Class.
const Dog = new Animal('bull dog', 5,'grey', 4)
const Cat = new Animal('cat',3,'white', 4)
console.log(Dog.getFullName()
)

// Exercises Level 2
// Override the method you create in Animal class
class Student extends Animal{
    constructor(name,age,color,legs,gender){
        super(name,age, color, legs, gender)
            this.gender= gender
    }
}

const student1 = new Student('goat', 2, 'brown',5, 'female')
// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics{
    constructor(){
        this.age = ages
    }
    get count(){return ages.length}
    get sum (){return ages.reduce((acc,curr)=>acc+curr)}
    get min (){ages.sort((a,b)=>a-b); return ages[0]}
    get max (){ages.sort((a,b)=>b-a); return ages[0]}
    get range(){ages.sort((a,b)=>a-b); return ages[ages.length-1]- ages[0];}
    get mean(){return ages.reduce((a,b)=> a += b )}
    get median(){ages.sort((a,b)=>a-b); return ages[Math.floor(ages.length/2)]}
}
const statistics = new Statistics()
console.log('Count:', statistics.count)
console.log('Sum:', statistics.sum)
console.log('count:', statistics.min)
console.log('count:', statistics.max)
console.log('count:', statistics.range)
console.log('count:', statistics.mean)
console.log('count:', statistics.median)

let pp=[1,2,4,6,9,5]

pp.sort((a,b)=>{
    a-b
    
})


//  pp.length%2 == 0? pp[pp.length/2] :pp[Math.floor(pp.length/2)]

// console.log(Math.floor(pp.length/2))   
// console.log()

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', 
// statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// 🎉 CONGRATULATIONS ! 🎉