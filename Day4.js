
// DAY 4
// Exercises: Level 1
//1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
// let age = parseInt(prompt('enter your age'))
// if (age > 18 ){
//     console.log('You are old enough to drive')
// } else {
//     let remainder = 18 - age
//     console.log(`You are left with ${remainder}  years to drive `)
// }


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let age1 = parseInt(prompt("enter first persons's age"))
// let age2 = parseInt(prompt("enter second person's age"))
// if (age1 === age2){
//     console.log('Age1 is greater than Age2')
// } else {
//     console.log('Age2 is greater than Age2')
// }
// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//  let a = 4;   let b = 3;
//   4 is greater than 3
// 4 >3 ? console.log('4 is greater ') : console.log('3 is greater')

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.
//ANSWER let input = parseInt(prompt('enter number'))
// if ( input % 2 === 0){
//     console.log(' it is an even number')
// } else{
//     console.log('it is an odd number')
// }


// Exercises: Level 2
//1  Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
//ANSWER let grade = prompt('input your grade')
// if (grade <= 49){
//     console.log('F')
// } else if (grade <=59 ){
//     console.log('D')
// } else if (grade <= 69){
//     console.log('C')
// } else if (grade <= 89){
//      console.log('B')
// }else if (grade <= 100){
//     console.log(A)
// } else{
//     console.log('not a valid grade.')
// }


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY`
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

