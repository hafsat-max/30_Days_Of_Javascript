//Day 1
// Write a single line comment which says, comments can make code readable

// Write another single comment which says, Welcome to 30DaysOfJavaScript

// Write a multiline comment which says, comments can make code readable, easy to reuse and informative

// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
let fName = 'Abiodun'
let isname = true
let midName 
let emptyval = null

// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
console.log(typeof(fName)); 


// Declare four variables without assigning values

// Declare four variables with assigned values

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

// Declare variables to store your first name, last name, marital status, country and age in a single line

// Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

// I am 25 years old.
// You are 30 years old.




// DAY 2


//1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

// 2 Print the string on the browser console using console.log()
//3 Print the length of the string on the browser console using console.log()
console.log(challenge.length)
//4 Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//5 Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//6 Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(2))

//7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(0, 2 ))

//8 Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))

//9 Split the string into an array using split() method
console.log(challenge.split()) 

//10 Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "))

//11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(arr.replaceAll("," , ""))
console.log(arr.replace(/,/g , " "))


//12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let newString = '30 Days Of JavaScript'
console.log(newString.replace('JavaScript', 'python'))

//13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(newString.charAt(15))

//14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(newString.charCodeAt('J'))

//15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(newString.indexOf('a'))

//16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(newString.lastIndexOf('a'))

//17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let word = 'You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf('because'))

//18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(word.lastIndexOf('because'))

//19  Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(word.trim())

//20 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(word.startsWith('Y'))

//21 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(newString.endsWith())


// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(newString.match(/a/g))


// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let first = '30 Days of'
let second = 'JavaScript'
console.log(first.concat(second))

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(newString.repeat())



//level 2
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = 10
let  str = +'10'
console.log(num === str)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8))
console.log(Math.ceil(9.8))

// Check if 'on' is found in both python and jargon
let nString = 'python'
console.log(nString.includes('on'))

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargons =  ' I hope this course is not full of jargon'
console.log(jargons.includes('jargon'))
  

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 100))

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255))


// Access the 'JavaScript' string characters using a random number.
let jString = 'JavaScript'



// Use console.log() and escape characters to print the following pattern.
console.log(' 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 ')
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction' 
 let lastNight = 'You cannot end a sentence with because because because is a conjunction' 
 let fPart = lastNight.substr(0,30)
 let lPart = lastNight.substr(58, lastNight.length)
 console.log( fPart +" " + lPart)



//  Exercises: Level 3
//  'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let Love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let countLove = Love.split(" ")

console.log(countLove) 

 
//  Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
 
//  Clean the following text and find the most frequent word (hint, use replace and regular expressions).
 
//      const sentence = '%I a$am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@tin
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting'
console.log(sentence.replace(/@/g, "").replace(/%/g , "").replace(/#/g, "").replace('$', "").replace('$', "").replace(/&/g, "").trim());







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
// const now = new Date
// console.log(now.getDay())        

// What is the month today as a number?
// console.log(now.getTime())

// What is the date today?
// console.log(now.getDate())
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
// eligibility = parseInt(theYear - userBirth)
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


// DAY 5
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
//1 Print the first company, middle and last company
// console.log(webTechs[0])
// console.log(webTechs.length -1)
// if(webTechs.length % 2 === 0){
//   console.log(webTechs.length /2 )
// }

//2 Filter out companies which have more than one 'o' without the filter method


// 3 Slice out the first 3 companies from the array
console.log(webTechs.slice(0,3))

//4 Slice out the last 3 companies from the array
console.log(webTechs.slice(webTechs.length -3, webTechs.length ))

// 5 Slice out the middle IT company or companies from the array
// console.log(webTechs.slice(webTechs))

// 6 Remove the middle IT company or companies from the array 
 





// 💻 Exercises:Day 6
// Exercises: Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
//ANSWER for(i=0; i <= 10; i++){
//   console.log(i)
// }

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop
//ANSWER for(i=10; i>= 0; i--){
//   console.log(i)
// }

// Iterate 0 to n using for loop

//3 Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     ####### 
//ANSWER let i; let result
// for(i=0; i<10; i++ ){
//   for(j= 0; j< i; j++){
//    result += ('#');
//   }
//   console.log(result)
//   result = " "
// }


//4 Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
//ANSWER for(i=0; i<=10; i++){
//   console.log(`${i} * ${i} = ${i * i}`)
// }


//5 Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
//ANSWER for(i= 0; i<= 10; i++){
//   console.log(`${i}  ${i**2}  ${i**3} `)
// } 


//6 Use for loop to iterate from 0 to 100 and print only even numbers
//ANSWER for(i=0; i<= 100; i++){
//   if(i % 2 === 0){
//     console.log(i)
//   } else {
//   }
// }


//7 Use for loop to iterate from 0 to 100 and print only odd numbers
//ANSWER for(i=0; i<=100; i++){
//   if(i % 2 === 0){
//   } else{
//     console.log(i)
//   }
// }


//8 Use for loop to iterate from 0 to 100 and print only prime numbers
//ANSWER for(i=0; i<=100; i++){
//   if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
    
//   }else {
//     console.log(i)
//   }
// }


//9 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//ANSWER let sum = 0;
// for(i=0; i<=100; i++){
//     sum = sum + i
// }
// console.log(sum)
// The sum of all numbers from 0 to 100 is 5050.


//10 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let even = 0
// let odd = 0
// for(i=0; i<=100; i++){
//   if(i % 2 ===0){
//     even = even + i
//     } else {
//       odd = odd + i
//     }
// }
// console.log(`The sum of even numbers is ${even}, while the sum of odd numbers is ${odd}`)
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.


//11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//ANSWER let numberArray = []
// numberArray. push(even, odd)
// console.log(numberArray)


//12 Develop a small script which generate array of 5 random numbers




// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// Develop a small script which generate a six characters random id:

// 5j2khz
















// Exercises: Level 2
// Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.

// '#ee33df'
// Write a script which generates a random rgb color number.

// rgb(240,180,80)
// Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// Exercises: Level 3
// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// Sort the webTechs array and mernStack array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array
// Reverse the countries array and capitalize each country and stored it as an array
// 🎉 CONGRATULATIONS ! 🎉













// // function togglePassword(){
// //     let mypassword = document.getElementById('password');
// //     if (mypassword.type === 'password'){
// //         mypassword.type = 'text'
// //     } else{
// //         mypassword.type = 'password'
// //     }

// // }

// // //toggler to show password or hide
// // let togglePasswordShow = document.querySelector("#togglePasswordShow") 
// // let password = document.querySelector('#mypassword')

// // togglePasswordShow.addEventListener('click', function (e){
// //     let type = password.getAttribute('type') ===` 'password' ? 'text' : 'password'
// //     password.setAttribute('type' , type);
// //     this.classList.toggle('fa-eye-slash')
// // })



// //HARMBURGER BUTTON
// /*const btn = document.getElementById('btn')
// const nav = document.getElementById('nav')

// btn.addEventListener('click', () => {
//     nav.classList.toggle('active');
//     btn.classList.toggle('active');
// }) */


















































































































































































