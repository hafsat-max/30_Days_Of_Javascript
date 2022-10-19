// Exercise: Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// let firstTag = document.querySelector('p');
// console.log(firstTag)

// Get each of the the paragraph using document.querySelector('#id') and by their id
let firstTag = document.querySelector('#first');
let secondTag = document.querySelector('#second');
let thirdTag = document.querySelector('#third');
let fourthTag = document.querySelector('#fourth');
console.log( firstTag,secondTag, thirdTag, fourthTag)

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let allps = document.querySelectorAll('p')

// Loop through the nodeList and get the text content of each paragraph
console.log(allps)
allps.forEach(item=> console.log(item.textContent))

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
allps[3].textContent= 'Fourth Paragraph'
console.log(allps[3].textContent)

// Set id and class attribute for all the paragraphs using different attribute setting methods



// Exercise: Level 2
//1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
let classes = document.querySelectorAll('.tags');
// classes.forEach(item=> item.style.color= 'white')
// allps.forEach((item, index)=>{
//     if(item.id==='first'){
//         item.style.backgroundColor='red';
//     } else if(item.id === 'second'){
//         item.style.backgroundColor= 'blue'
//         item.style.textAlign= 'center'

//     } else if(item.id === 'third'){
//         item.style.backgroundColor= 'purple';
//         item.style.textAlign= 'right'
//     } else if(item.id==='fourth'){
//         item.style.backgroundColor= 'green';
//         item.style.textAlign= 'center'
//     }
// })

//2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allps.forEach((item,index)=>{  
     if(item.id == 'first' || item.id== 'third'){
        item.style.color= 'green'
     } else{
        item.style.color ='red'
     }
})



// Set text content, id and class to each paragraph


// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.


// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
// <!-- index.html -->
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>JavaScript for Everyone:DOM</title>
//   </head>
//   <body>
//     <div class="wrapper">
//         <h1>Asabeneh Yetayeh challenges in 2020</h1>
//         <h2>30DaysOfJavaScript Challenge</h2>
//         <ul>
//             <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>
//         </ul>
//     </div>
//   </body>
// </html>