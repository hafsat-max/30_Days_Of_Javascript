

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
  
  
  