const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

// Exercises Level 1
// Change skills array to JSON using JSON.stringify()
const newSkills = JSON.stringify(skills, undefined, 9)
console.log(newSkills)

// Stringify the age variable
const newAge = JSON.stringify(age)

// Stringify the isMarried variable
const isMarriedd = JSON.stringify(isMarried)

// Stringify the student object
const students = JSON.stringify(student)

// Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties
const newStudents = JSON.stringify(student,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(newStudents)



// Exercises Level 3
// Parse the txt JSON to object.new
const newObj = JSON.parse(txt)

// Find the user who has many skills from the variable stored in txt.
let max= 0
let mostSkilled;

for (const person in newObj){
    let userSkill = newObJ[person].skills.length
    if(userSkill > max){
         max = userSkill; 
         mostSkilled= `${person.toUpperCase()}, has the highest skills of ${max}`} 
}
console.log(mostSkilled)
