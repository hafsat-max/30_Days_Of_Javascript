console.log('hello')

function maskify(cc) {
  if (cc.length > 4) {
    lastFour = cc.slice(cc.length - 4)
    firstSet = cc.slice(0, cc.length - 4)
    return firstSet.replace(/\w/g, '#') + lastFour
  } else {
    return cc
  }

}

console.log(maskify('weerrr44444'))

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

function multiply(num) {
  let convStr = String(num);
  if (convStr.length <= 1) {
    return 0
  }

  let count = 0;
  let sumValue = 1;

  while (convStr.length != 1) {
    count += 1
    const newArray = convStr.split("");
    for (const curr of newArray) {
      sumValue *= +curr;
    }

    convStr = String(sumValue);
    sumValue = 1;
  }
  return count;
}
console.log(multiply(976))


// function persistence(num) {
//    for (var ii = 0; num > 9; ii++) {
//      num = num.toString().split('').reduce((t, c) => c * t);
//     }
//     return ii;
// }
// console.log(persistence(999))


function solve(n) {
  // Your code here
}



// if(condition) {
//   // stop calling itself
//   //...
// } else {
//   recurse();
// }

// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:

function arrList(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }
  return arr
}
console.log(arrList(2))


// Create a function named divisors / Divisors that takes an integer n > 1 
// and returns an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
function divisors(n){
  let arr = []
 if(n>1){
    console.log(n)
    for(let i =2; i<n; i++){
      if(n%i ==0){
        console.log(i)
        arr.push(n%i)
      }
    }
  }
  return arr
}
console.log(divisors(23))
// should return [2,3,4,6]

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// function spinWords(sentence){
//   let sentenceSplit = sentence.split(" ")
//   console.log(sentenceSplit)
//   return sentenceSplit.map(ele =>  {
//     console.log(ele)
//     ele.length>=5? ele.reverse() : ele
//   })
// }

function spinWords(sentence){
  let sentenceSplit =  sentence.split('')
  let splittedSentence = sentenceSplit.map(item =>{
    console.log(item.join(''))
   return  item.length>=5?  item.split("").reverse('').join(""): item
  })
  return splittedSentence.join('')
}
console.log(spinWords( "fug jjjj" )) 
//"Hey wollef sroirraw"

