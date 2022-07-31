// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set
// const net = [0,1,2]
// const newSet = new Set(net)

// for (const num of newSet) {
//     console.log(num)
//   }
const numbers = new Set()
for (const num of numbers){
    console.log()
}


// Create a set containing 0 to 10 using loop
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  
  for (const language of setOfLanguages) {
    console.log(language)
  }
  




// Remove an element from a set
// setOfLanguages.delete('English')
setOfLanguages


// Clear a set
// setOfLanguages.clear()

// Create a set of 5 string elements from array
// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
  
//   const setOfLanguages = new Set(languages)


// Create a map of countries and number of characters of a country
 countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  

// Exercises:Level 2
// Find a union b
let a = [1,2,9,3,4,5]
let b = [2,3,4,5,6]
let A = new Set(a)
let B = new Set(b)`

  

`
let union = [...a, ...b]
console.log(union)


// Find a intersection b
let intersect = a.filter(item =>{
    B.has(item)
})
let newInt 
console.log(intersect)

// Find a with b
// Exercises:Level 3
// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:

   // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

  // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]
// 🎉 CONGRATULATIONS ! 🎉

// << Day 9 | Day 11 >>