// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi,gravity, humanBodyTemp, waterBoilingTemp ] = constants

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
// let [fin, est, sw, den, nor] = countries

// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
let {width} = rectangle


// Exercises: Level 2

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    
// Iterate through the users array and get all the keys of the object using destructuring
for (const {name, scores, skills, age}of users){
    console.log(`${name} scored ${scores} and posses the following skills; ${skills}. And his age is ${age}`)
}


// Find the persons who have less than two skills
for (const {name,skills} of users){
    skills.length <2 ? console.log(name): null
  }



// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']



// A junior developer structure student name, skills and score in array of arrays which may not easy to read.
//  De structure the following array name to name, skills array to skills, scores array to scores, 
// JavaScript score to jsScore and React score to reactScore variable in one line.

  const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//   const [name,skills ,[html, css, jsScore, reactScore]] = student

//   console.log(name, skills, jsScore, reactScore)


// Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
let obj= []
      function convertArrayToObject(item){
        for(let [name, [skills], [scores]] of item){
           obj += `{name: ${name}, \n skills: ${skills}, \n scores: ${scores} }` 
        }
        return obj
      }
    console.log(convertArrayToObject(students))

 
    const studentt = {
      initials: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

     
// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const newStudent = {...studentt,  }

// Add Bootstrap with level 8 to the front end skill sets
console.log(newStudent)


// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
    console.log(newStudent)
// The copied object output should look like this:~!

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }




