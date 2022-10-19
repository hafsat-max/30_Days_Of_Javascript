






// Write three JavaScript statement which provide falsy value.

// Figure out the result of the following comparison expression
// Exercises: Level 1 first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
let p = 'python'
let j = 'jargon'
// console.log(p.length()=== j.length())


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
// Use the Date object to do the following activities

// What is the year today?
const now = new Date(2022,7, 0) 
console.log(now.getDate())
time= 45
console.log(time.toString().padStart(2,0))

// console.log(now.getDay())        

// What is the month today as a number?
// console.log(now.getTime())

// What is the date today?

// What is the day today as a number?
// What is the hours now?
// console.log(now.getHours())
                                                                            
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.


// Exercises: Level 2
//1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

//ANSWER: let breadth = prompt('Enter breadth')
// let height = prompt('Enter height')
// let area = 0.5 * breadth * height;
// console.log(area);




//2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

    //ANSWER: let a = parseInt(prompt('a'))
    // let b =  parseInt(prompt('b'))
    // let c =  parseInt(prompt('c'))
    // parseInt(a, b, c)
    // let perimeter = a + b + c
    // console.log(perimeter)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

//3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//ANSWER: let length = parseInt(prompt('enter length'))
// let width = parseInt(prompt('enter width'))
// console.log(area = length * width)
// console.log(2 * (length + width))


//4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//ANSWER let r = parseInt(prompt('enter radius'))
// const pi = Math.PI
// document.write(area= Math.floor(pi * r ** 2))


//5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
//ANSWER let x = parseInt(prompt('enter value of x'))
// let y
// console.log(y = (2 * x) - 2)

//6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1 = 2; let y1 = 2; let x2 = 6; let y2 = 10;
// console.log(m = (y2-y1)/(x2-x1))
// Compare the slope of above two questions.

//7 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//ANSWER let x = parseInt(prompt('enter x value'))
// console.log(y= (x ** 2) + (6 *x) + 9)

//8 Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//ANSWER let hours = parseInt(prompt('input job hours'))
// let ratePerHour = parseInt(prompt('input rate per hour'))
// console.log(hours * ratePerHour)
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

//8 If the length of your name is greater than 7 say, your name is long else say your name is short.
//ANSWER yourName = prompt('insert your name')

//     if( yourName.length > 7){
//         console.log('Your name is too long')
//     } else {
//         console.log('your name is too short')
//     }


//9 Compare your first name length and your family name length and you should get this output.
//ANSWER let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// console.log(first.length === lastName)

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25


//10 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let userBirth = parseInt(prompt('What year were you born?'))
// let now = new Date
// let theYear = (now.getFullYear())
// eligibility = parseInt(theYear - userBirth)`
// if (eligibility > 18 ){
//     console.log(`you are ${eligibility}. you are eligible to drive a car.`)
// } else{
//     notEligible = 18 - eligibility
//     console.log(`you are ${eligibility}. You will be allowed after ${notEligible} years.` )
// }



// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
