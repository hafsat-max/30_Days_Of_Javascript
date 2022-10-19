console.log('hello')


// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(skills, false )
//     }, 2000)
//   }
  
//   doSomething((err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   })
//   // after 2 seconds it will print the skills
  
// const callSomething= (cal)=>{
//     setTimeout(()=>{
//         const name = 'tade'
//         cal( false,name)
//     }, 2000)
// }
// callSomething((err, result)=>{
//     if (err) {
//         return console.log(err)
//       }
//       return console.log(result)
// })

// const doPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     let a = 5; let b=4;
//     if(a!=b){
//         resolve(a)
//     } else {
//         reject(a+b)
//     }
//     },2000)
// })
// // error handling
// .then(result=>{
//     console.log(result)
// })
// .catch(error=> console.log(error))
// // console.log(doPromise)

    
// const aPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const skills = ['html', 'css']
//         if(skills.includes('node')){
//             resolve(skills)
//         } else{
//             reject('Node cant be found')
//         }
//     })
// },2000)
// .then(result=> console.log(result))
// .catch(err=> console.log(err))

// // API
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

// ex2
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// fetch(catsAPI)
// .then(response=>response.json())
// .then(data=>{console.log(data)})
// .catch(err=>console.error(err))


// // ex3
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// const getData = async () =>{
//     try{
//         const response = await fetch(catsAPI);
//         const cats = await response.json();
//         console.log(cats)
//     } catch(err){
//         console.log(err)
//     }
// }
// getData().then(result=>{result}).catch(error=>console.log(error))





// const bew = [{name: 'Afghanistan', count: '90'},
//             {name: 'Afghan', count: '122'}, {name:'multi', count: '23'}]
// for (let {name,count} of bew){
    
//     console.log(name)
// }
arr=[1,2,3]
let p=0
for(let a of arr){
    Number(p +=a)
}
console.log(p)





function XO (str){
    let a= str.match(/x/gi) || []
    let b = str.match(/o/gi)  || []
    return a.length=== b.length  
}
console.log(XO('worwxxD'))







// let newUser= {...user, namee:'biodun'}

// DESTRUCTURING
let user = {
    namee: 'ases',
    title: 'mother'
}
user = {...user, namee:'biodun'}

console.log(user.namee)