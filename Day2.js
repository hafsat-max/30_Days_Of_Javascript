
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

