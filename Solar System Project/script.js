const input = document.querySelector('input');
const planetOpt = document.querySelector('#planet');
const card = document.querySelector('.card');
const submitButton = document.querySelector('button');
const form = document.querySelector("form");
const weight = document.querySelector(".value");
const error = document.querySelector('.err');
const notification = document.querySelector('notification');
const image = document.querySelector('.img');
const planetImage = document.querySelector("#earth");
const options = document.querySelector('.opt');


const result = document.querySelector('#theresult');

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

let planet = "";
planetOpt.addEventListener("change", function () {
    planet = this.value.split(' ')
})


     submitButton.addEventListener("click", () => {
        if (input.value === undefined || input.value === "") {
            error.style.display = 'block';
            card.style.display = 'none';
            image.style.display = 'none'

        } else {
            image.style.display = 'block';
            error.style.display = 'none';
            card.style.display = 'block';
            weight.innerHTML =  (input.value * planet[1]).toFixed(2);
            
            planetImage.src= `./images/${planet[0]}.png`
            console.log(planet.text)
            console.log('first')


        }
    })




// Earth's gravity = 9.8
// Venus = 8.87
// Mars 3.72076
// Mercury 3.7
// jupiter 25.8
// Saturn `118`
// Uranus 9
// neptune 11.2
// pluto 0.66