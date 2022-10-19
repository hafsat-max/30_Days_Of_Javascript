function spinWords(string) {
    wordsArray = string.split(" ");
    wordsArray.forEach((item, index) => {
        if (item.length > 4) {
            return (wordsArray[index] = item.split("").reverse().join(""));
        }
    });
    return wordsArray.join(" ")
}
console.log(spinWords('Issssss am certain about the school'))





// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words.
//  You should return an array of all the anagrams or an empty array if there are none.
function anagrams(word, wordList) {
    let sortedArray = []
    let sortedWord = word.split("").sort().join("");
    wordList.forEach(words => {
        let sortedWords = words.split("").sort().join("")
        if (sortedWord === sortedWords) {
            sortedArray.push(words)
        }
    })

    return sortedArray
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

['aabb', 'bbaa']


// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
// and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts
//  (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
//  Ingredients that are not present in the objects, can be considered as 0.

// https://www.codewars.com/kata/525c65e51bf619685c000059/javascript






function getMissingIngredients(recipe, added) {
    for (let { ...ingr } in recipe) {
        console.log(ingr)
    }

    return

}



getMissingIngredients({ flour: 200, eggs: 1, sugar: 100 }, { flour: 50, eggs: 1 }); // must return {flour: 150, sugar: 100}
// getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
// getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}


// - Create a function that takes a number as an argument.
//  Add up all the numbers from 1 to the number you passed to the function.
//  For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
const addUp = (num) => {
    let arr = 0
    for (let i = 0; i <= num; i++) {
        arr += i
    }
    return arr
}
console.log(addUp(4))



// - Create a function that takes an array of numbers and 
// returns both the minimum and maximum numbers, in that order. `minMax([1, 2, 3, 4, 5]) ➞ [1, 5]`
function minMax(num) {
    let minimax = []
    num.sort()
    console.log(num)
    return [num[0], num[num.length - 1]]
}

console.log(minMax([1, 2, 3, 4, 5]))


// const findUniq = (arr)=>{
//     
// }

// findUniq([ 1, 1, 1, 2, 1, 1 ]);
// // findUniq([ 0, 0, 0.55, 0, 0 ]) 





// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript
function convStr(str) {
    let string = str.split("")
       let reduced = string.reduce((acc, cur) => {
            return {...acc, [cur]: (acc[cur] || 0)+1}
        }, {})

        console.log(reduced)
        for(let item in reduced){
            console.log(reduced[item])

            if(reduced[item]>1){
                console.log(item)
            return str.replaceAll(item, "(")

            } else if(reduced[item]==1){
                console.log(item)
                return str.replaceAll(item, ")") 

            }
        }
}
console.log(convStr('teeptttty'))


function duplicateEncode(word){

    var repeat = [];
    var result = [];
    var letters = word.split('');
    console.log(letters)
    for (i=0; i < letters.length; i++){
        if (repeat.indexOf(letters[i]) > -1) {
            result.push(")");
        } else {
            result.push("(");
        }
        repeat.push(letters[i]);
        console.log(repeat)
     }
     return result.join("");
   }
  console.log(duplicateEncode("aleluia"))



  const duplicateEncodes = word => {
    let newString = ''
    word = word.toLowerCase() ||word
    word.split('').filter((item, index) => {
      if(word.indexOf(item) !== index){
        newString += ')'
      }else if(word.lastIndexOf(item) !== index){
        newString += ')'
      }else{
        newString += '('
      }
    })
    return newString
}
console.log(duplicateEncodes("O!!!!@k!!!H!!!)!!n!"))



// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// let arr = []
// let result = []
// for(let i=0; i<items.length; i++){
//     if(arr.indexOf(items[i]) > -1){
//         console.log(arr)
//         arr.push(items[i])
//     } else{
//         result.push(items[i])
//     }
    
// }
function findUniq(items){
    let find= items.reduce((acc, cur)=>{
        acc[cur]= (acc[cur]+1 || 1)
       return acc      

    }, {})
    let newObj= Object.keys(find).filter((itm, indx)=>find[indx] % 2)
    return Number(newObj)
    
}
console.log(typeof(findUniq([ 1, 1, 1, 0.5, 1, 1 ])))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) )
console.log(findUniq([ 1, 1, 1, 0.5, 1, 1 ]) )

function XO(item){
    console.log(item)
    let sp = item.toLowerCase().split("")
    let countx= 0;
    let county = 0;
    sp.map(item=>{
        if(item=='x'){
            countx++
        }
        if(item== 'o'){
            county++
        }
    })

    return countx == county
}
console.log(XO('xxXoo'))