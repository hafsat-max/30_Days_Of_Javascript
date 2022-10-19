// // PROMISES

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'



function meetId(){

    const flag = /[a-z]{3}-[a-z]{4}-[a-z]{3}/g
    if(flag.test(num)){
      return 'Valid meet Id'
    }
    return 'Invalid id'
  }
  
   console.log(meetId('acd-fhrr-drf'))

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(countriesAPI)
// .then(response=>response.json())
// .then(datas=>{
//     for(data of datas){console.log(`Country:${data.name}\nCapital:${data.capital}\nLanguages:${data.languages} \nPopultaion:${data.population} \nArea:${data.area}`)}
// })
// .catch(err=>{console.log('not reachable')})


// Exercises: Level 2
// Print out all the cat names in to catNames variable.
// fetch(catsAPI)
// .then(response=>response.json())
// .then(catLists=>{
//     data = catLists.map(user=>{
//         return user.weight.metric
//     }) 
//     console.log(data)
// })
// .catch(err=>console.log(err))

// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.

// (3 - 5)/2   3.4
// 3- 4 /2      4.5


// Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
.then(response=>response.json())
.then(countriesList=>{
    // let p= countriesList.map(item=>{
    //     return item.population
    // })   
    // console.log(p.sort((a,b)=>b-a))
    let detailsArray = []
   for(let {name, population}  of countriesList){
    let details = {'country': name, 'population': population};
    detailsArray.push(details)
    } 
    let compiler = detailsArray.sort((a,b)=> b.population- a.population);
    console.log(compiler.slice(0,10))
    
}).catch(err=>console.log(err))

// filter the countries by continent and arragnge them in ascending order by their population


let url =  'https://restcountries.com/v2/all';
const getData = async()=>{
    try{
        const response = await fetch (url)
        const data = await response.json();
        const filterCountry = data.map(country => console.log(country))
    }catch (err){
        console.log(err)
    }
}
getData()
// const bew = [{name: 'Afghanistan', count: '90'},
//             {name: 'Afghan', count: '122'}, {name:'multi', count: '23'}]
// for (let {name,count} of bew){
    
//     console.log(name)
// }

// Read the countries api and count total number of languages in the world used as officials.
// 🎉 CONGRATULATIONS ! 🎉A-' 

