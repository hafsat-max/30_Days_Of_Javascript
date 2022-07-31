// Exercises: Level 1
// Create an empty object called dog
let dog = {}

// Print the the dog object on the console
// console.log(dog) 

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'bingo'
dog.legs = 4
dog.color = 'black'
dog.age = '5 years'

// let sum = 0;
//   for(i=0; i<=100; i++){
//       sum = sum + i
//   }
//   console.log(sum)


dog.bark = 'woof woof'
// console.log(dog)

// Get name, legs, color, age and bark value from the dog object
// console.log(`${dog.name} , ${dog.legs} , ${dog.color} , ${dog.age} , ${dog.bark}`)

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Rotweiller'

console.log('hello')
// Exercises: Level 2

const user = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}




// Find the person who has many skills in the users object.
// let max = 0;
// let hashArray = []

// for (const person in user){
//   let currentLength = user[person].skills.length
//   if( currentLength > max){
//     max = currentLength
//     hashArray = [max , person]
//   }
// }
// console.log(hashArray)


// Count logged in users, count users having greater than equal to 50 points from the following object.
// let sum =[]
// for(const point in user){
//   console.log(point)
//   let allPoint = user[point].points;
//   if(allPoint >= 50){
//     sum.push(allPoint)
//   }
// }; console.log(sum.length)
 

// Find people who are MERN stack developer from the users object
// let merns= []
// for(const names in user){
//   let mern = user[names].skills
//   if(mern.includes( 'MongoDB', 'Express', 'React', 'Node')){
//     merns.push(names)
//   }
// }; console.log(merns)


// Set your name in the users object without modifying the original users object
user["Biodun"] = { email: 'hafsahbusari69@gmail.com.com',
skills: ['HTML', 'CSS', 'JavaScript'],
age: 24,
isLoggedIn: false,
points: 50}

console.log(user.Biodun)


// Get all keys or properties of users 
console.log(Object.keys(user))


// Get all the values of users object
console.log(Object.values(user))


// Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome,
//  totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//  Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount ={
      firstName: 'Abiodun',
      lastName: 'Busari',
      incomes: 40000,
      totalExpense: 20000,
      accountInfo: '3',
      addIncome: 'd',
      addExpense : ' kf',
      accountBalance : 30000
    }
    console.log(signUp)
    const users = [
      {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
      },
      {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
  ];

  const newId = {
    _id: 'ghderc',
    username: 'e',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
  }
  // **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
  // Imagine you are getting the above users collection from a MongoDB database. 
  // a. Create a function called signUp which allows user to add to the collection.
  // If user exists, inform the user that he has already an account

  function signUp(n){
    for (const id in users){
      if (users[id].username == n){
        return 'User already exist'
      } else if(users[id].username !== n) {
        newId.username = n;
        users.push(newId);
      }  return users 
      } 
  }
  console.log(signUp(''))

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


// b. Create a function called signIn which allows user to sign in to the application.

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
function rateProduct(item, id, rate){
  let rateUser = {userId: id, rate};
  for(const product of products){
    if(product['name'] == item){
      product['ratings'].push(rateUser)
    }
  } return products
}
console.log(rateProduct('Laptop', 'Ola', 4))
// console.log(rateProduct('mobile phone', 'kunle', 9))



const averageRating = (productName) =>{
  let average = 0
  for (const product of products){
    if(productName == product.name){
      product.ratings.forEach((num)=>{
       product.ratings.length?  average += num.rate/ product.ratings.length: null
      })
    }
  }
  return average
}
console.log(averageRating('mobile phone'))

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked
function likeProduct (productName){
  for(const product of products){
    if(product.name === productName){
      if (product.likes.length){
        product.likes.pop()
      }else if (product.likes.length == 0){
        product.likes.push('like')
      }
   }
  } return products
}
console.log(likeProduct('mobile phone'))


const objs = {
  alex:{
    email: 'ddd',
    skill: [1,2,3,4,]
  },
  bidex:{
    email: 'dew',
    skills: [2,3,4,]
  }
}
console.log(objs.alex.skill.length)
function getSkills(enter){
for(let name in objs ){

  console.log(name)
}
}





// let numbers= [1,2,3,4]
// const ans =numbers.reduce((a,b) =>
//    a + b, 0   
// ); console.log(ans)