import countries from "../data/countries_data.js"

// Calling the population button
const population = document.querySelector('.population');

// Calling th elanguage button
const mostLanguages = document.querySelector('.languages');

// Population result display
let populationResult = document.querySelector('.populationResult');

// Languages result display
let languageResult = document.querySelector('.languageResult');



// console.log(countries)

let mostPopulated = countries.sort((a, b) => b.population - a.population);
const populated = mostPopulated.map(item => item).slice(0, 10);
console.log(populated)



// MOST OOPULATED COUNTRIES
population.addEventListener('click', function () {
    populationResult.style.display = 'block';
    // languageResult.style.display = 'none';

    const newTable = document.createElement("table");
    newTable.innerHTML = "<thead><th>Name</th><th>Population</th></thead>";
    for (const { name, population } of populated) {

        const newRow = document.createElement("tr");
        const countries = document.createElement("td");
        const populations = document.createElement("td");
        countries.textContent = name;
        populations.textContent = population;
        newRow.appendChild(countries);
        newRow.appendChild(populations);
        newTable.appendChild(newRow);
    }

    populationResult.appendChild(newTable);
})




// MOST SPOKEN LANGUAGES

// To get the 10 most spoken languages
const languages = countries.reduce((acc, cur) => {
    return [...acc, ...cur.languages]
    
}, [])
const lang = [...new Set(languages)].sort((a, b) =>languages.filter(item => item === b).length - languages.filter(item => item === a).length).slice(0,10)

console.log(lang)

// To get the frequency of the languages
const count = {};
for (let item of countries) {
    let allLanguages = item.languages;

    for (const element of allLanguages) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

}
let languageCount =  Object.values(count).sort((a,b)=> b-a).slice(0,10)
console.log(languageCount)

let resultAr = lang.map( function (value, index){

    return {name: value, language: languageCount[index]}
});
console.log(resultAr)

// let tray = []
// tray.forEach(item =>{
    //     console.log(item)
    //     tray.push({name:lang, count: count})
    //     console.log(tray)
    // })
    
    
    
    // button event listener to display the result
    mostLanguages.addEventListener('click', function(){
        populationResult.style.display = 'none';
        
        const newTable = document.createElement("table");
        newTable.innerHTML = "<thead><th>Name</th><th>Population</th></thead>";
    
        for(let v of resultAr){

        }
        console.log(Object.keys(resultAr))
        
})
    

 













