import {navBar,donexa} from "./components.js"

document.querySelector('.navBar').innerHTML = navBar();
const donexaLink =document.querySelectorAll('.donexa')
donexaLink.forEach(don=>{
    don.innerHTML = donexa();
})