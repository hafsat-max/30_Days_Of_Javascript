// // Exercises: Level 1
// import countriess from  "./countries_Data.js"


// console.log(1)
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'erf']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // Explain the difference between forEach, map, filter, and reduce.

// // Define a callback function before you use it in forEach, map, filter or reduce.

// // Use forEach to console.log each country in the countries array.
// let allCountry= []
//  countries.forEach(function (country) {
//  allCountry.push(country)
// })
// console.log(allCountry)

// // Use forEach to console.log each name in the names array.
// names.forEach((name, index) =>{
//   console.log(name)
// })


// // Use forEach to console.log each number in the numbers array.
// let arr= [];
// numbers.forEach(number =>{
//   arr.push(number)
// })
// console.log(arr)

// // Use map to create a new array by changing each country to uppercase in the countries array.
// let upperCountry = []
// countries.map(element =>{
//   upperCountry.push(element.toUpperCase())
// }); console.log(upperCountry)

// // Use map to create an array of countries length from countries array.
//  let lengthArray = [];
//  countries.map((element) =>{
//   lengthArray.push([element, element.length])
//  }); console.log(lengthArray)

// // Use map to create a new array by changing each number to square in the numbers array
// let numberArr = []
// numbers.forEach(e =>{
//   numberArr.push(e **2)
// }); console.log(numberArr)

// // Use map to change to each name to uppercase in the names array
// let upperName = []
// names.map(element =>{
//   upperName.push(element.toUpperCase())
// }); console.log(upperName)

// // Use map to map the products array to its corresponding prices.
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// let prodArr = []
// products.map((item)=> {
//   prodArr.push(item.product,item.price)
// }); console.log(prodArr)

// // Use filter to filter out countries containing land.
// const countryLand = countries.filter(e =>{
//  return (e.includes('land'))
// }); console.log(countryLand)

// // Use filter to filter out countries having six character.
// const countryChar = countries.filter(e =>{
//   return (e.length == 6)
//  }); console.log(countryChar)

//  // Use filter to filter out countries containing six letters and more in the country array.
//  const countryChars = countries.filter(e =>{
//    return (e.length >= 6 )
//   }); console.log(countryChars)

// // Use filter to filter out country start with 'E';
// const countryStart = countries.filter(e =>{
//   return (e.startsWith('e'))
//  }); console.log(countryStart)

// // Use filter to filter out only prices with values.
// const productPrice = countries.filter(e =>{
//   return (e.startsWith('e'))
//  }); console.log(countryStart)

// // Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// // const getStringLists = (...arrayContent) => {
//   //   const stringArray = []
//   //   arrayContent.forEach(item  => {
// //     if(typeof(item) != "number"){
// //       stringArray.push(item)
// //     }
  
// //   } )
// //   return stringArray 
// // }
// // console.log(getStringLists("a" , 1 ,2 ,"g" , 8 , 12))

// function getStringLists(...arrayCont){
//   const stic = arrayCont.filter(item =>{
//     return typeof item == 'string'
//   })
//   return stic
// }
// console.log(getStringLists("a" , 1 ,2 ,"g" ,true, 8 , 12))


// // Use reduce to sum all the numbers in the numbers array.
// const ans =numbers.reduce((a,b) =>
//    a + b, 0
//    ); console.log(ans)
   

// // Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// // const northCountries = [ 'Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway','IceLand']
// // const concat = northCountries.reduce((acc,cur) =>{
//   //     return `${acc}, ${cur} `
//   // }); console.log(concat + "are all african country.")
  
// // Explain the difference between some and every
// // Use some to check if some names' length greater than seven in names array
// const checkSome = names.some(item =>item.length > 7); console.log(checkSome)


// // Use every to check if all the countries contain the word land 
// const checkEvery = countries.every(item =>item.includes('land')); console.log(checkEvery)

// // Explain the difference between find and findIndex.
// // Use find to find the first country containing only six letters in the countries array
// const findL = countries.find(item => item.length=== 6)

// // Use findIndex to find the position of the first country containing only six letters in the countries array
// const findI = countries.findIndex(item => item.length=== 6)

// // Use findIndex   to find the position of Norway if it doesn't exist in the array you will get -1.
// const findN = countries.findIndex(item => item== 'Norway'); console.log(findN)


// // Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// const findR = countries.findIndex(item => item== 'Russia'); console.log(findR)


// // const findN = countries.findIndex(item => item== 'Norway'); console.log(findN)




// // Exercises: Level 2
// // Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// const productss = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// const PriceOfProducts = productss.map(element => Number(element.price)).reduce((item, curr) => 
// curr+item); console.log(PriceOfProducts)


// // Find the sum of price of products using only reduce reduce(callback))
// const totalP = productss.reduce((acc, curr) => acc + Number(curr.price),0); console.log(totalP)
// // Declare a function called categorizeCountries which returns an array of countries which have some common pattern
// // (you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// // function categorizeCountries(){

// // }
// // console.log(categorizeCountries())


// // Create a function which return an array of objects, 
// // which is the letter and the number of times the letter // use to start with a name of a country.
// // Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// // Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// // Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// // Exercises: Level 3
// // Use the countries information, in the data folder. Sort countries by name, by capital, by population
// console.log(countriess)

// // const sortName = countriess.sort((a,b)=>a.name.charCodeAt()- b.name.charCodeAt());
// // const sortCapital = countriess.sort((a,b)=>a.capital.charCodeAt()- b.capital.charCodeAt());
// const sortpopulation = countriess.sort((a,b)=>a.capital.charCodeAt()- b.capital.charCodeAt());
// console.log(sortpopulation)


// // *** Find the 10 most spoken languages:

// // // Your output should look like this
// // console.log(mostSpokenLanguages(countries, 10))
// // [
// // {country: 'English',count:91},
// // {country: 'French',count:45},
// // {country: 'Arabic',count:25},
// // {country: 'Spanish',count:24},
// // {country:'Russian',count:9},
// // {country:'Portuguese', count:9},
// // {country:'Dutch',count:8},
// // {country:'German',count:7},
// // {country:'Chinese',count:5},
// // {country:'Swahili',count:4}
// // ]

// // // Your output should look like this
// // console.log(mostSpokenLanguages(countries, 3))
// // [
// // {country: 'English',count: 91},
// // {country: 'French',count: 45},
// // {country: 'Arabic',count: 25},
// // ]```
// // *** Use countries_data.js file create a function which create the ten most populated countries

// // console.log(mostPopulatedCountries(countries, 10))
// function mostPopulated(data, num){
//   const populated = c.sort((a,b)=>{return b})
// }
// // [
// // {country: 'China', population: 1377422166},
// // {country: 'India', population: 1295210000},
// // {country: 'United States of America', population: 323947000},
// // {country: 'Indonesia', population: 258705000},
// // {country: 'Brazil', population: 206135893},
// // {country: 'Pakistan', population: 194125062},
// // {country: 'Nigeria', population: 186988000},
// // {country: 'Bangladesh', population: 161006790},
// // {country: 'Russian Federation', population: 146599183},
// // {country: 'Japan', population: 126960000}
// // ]

// // console.log(mostPopulatedCountries(countries, 3))
// // [
// // {country: 'China', population: 1377422166},
// // {country: 'India', population: 1295210000},
// // {country: 'United States of America', population: 323947000}
// // ]
// // ```


// // *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// // and measure of variability(range, variance, standard deviation). 
// // In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
// //  You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object.
// //  Check the output below.
// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27,24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// // let me= 'dd'
// // function calcMean (data){
// //   return Math.ceil(data.reduce((a,b) => a+b)/ data.length)
// // };console.log(calcMean(ages))

// // const statistics = {

// //   count: countNum =(data) =>{
// //       return data.length
// //   },

// //   sum : function getMean (data){
// //     return Math.ceil(data.reduce((a,b) =>a+ b
// //      ))
// //   },

// //   min: getMin= (data) =>{ data.sort((a,b)=> a-b)
// //   return data[0]
// //   },

// //   max:getMax= (data)=>{ data.sort((a,b)=> a-b)
// //     return data[data.length-1]
// //   },

// //   range: function getRange(data){
// //     data.sort((a,b)=> a-b)
// //     return data[data.length-1] -data[0]  
// //   },
// //   mean: function getMean(data){
// //     return Math.ceil(data.reduce((a,b)=> a+b)/data.length)
// //   },
// //   median: function getMedian(data){
// //     const mid = Math.floor(data.length/2)
// //     num= [...data].sort((a,b)=> a -b )
// //     return data.length % 2 !=0 ? num[mid] : (num[mid-1] +  num[mid]) /2
// //   },
// //   mode: function getMode (data){
// //     const mode = {};
// //     let max = 0, count = 0;
// //     for(let i = 0; i< data.length; i++){
// //       const item = data[i]

// //       if(mode[item]){
// //         mode[item]++
// //       } else{
// //         mode[item]= 1
// //       }
// //       if(count < mode[item]){
// //         max= item;
// //         count = mode[item]
// //       }
// //     }
// //     return max
// //   },
// // };

// // console.log('count:', statistics.count(ages)) 
// // console.log('Sum: ', statistics.sum(ages)) 
// // console.log('Min: ', statistics.min(ages))
// // console.log('Max: ', statistics.max(ages))
// // console.log('Range: ', statistics.range(ages)) 
// // console.log('Mean: ', statistics.mean(ages))
// // console.log('Median: ',statistics.median(ages)) 
// // console.log('Mode: ', statistics.mode(ages)) // 
// // console.log('Variance: ',statistics.var()) // 17.5
// // console.log('Standard Deviation: ', statistics.std()) // 4.2
// // console.log('Variance: ',statistics.v`ar()) // 17.5
// // console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // console.log(statistics.describe())
// // Count: 25
// // Sum:  744
// // Min:  24
// // Max:  38
// // Range:  14
// // Mean:  30
// // Median:  29
// // Mode:  (26, 5)
// // Variance:  17.5
// // Standard Deviation:  4.2
// // Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (
  
// // function isPrime(num){
// //   for(let i=2; i*i <=num; i++){
// //     if(num% i ===0)
// //     if(num)
// //     return false
// //   }
  
// //    return num;
// // }

// // console.log(isPrime(40))


// // let productsName= ['four', 'two', 'seven', 'bay', 'tyy']
// // let prices= [23,45,675, 10,55]

// // function doubleHalved(name, price){
// //     for(i=0; i<name.length; i++){
// //         if(name.length[i]%2 ==0){
// //             console.log(price[i]== price[i]*2)            
// //         } else if(name.length[i] %2!=0){
// //             price[i]= price[i]/2
           
// //         }
// //         return `The price of ${name} is ${price}`
// //       }
// //     }
// // console.log(doubleHalved(productsName, prices))

