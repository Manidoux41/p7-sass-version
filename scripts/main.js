import { recipes } from './datas/recipes.js';
import { displayRecipes } from './functions/displayRecipes.js';
import { filterManagement } from './functions/filterManagement.js';

const resultSearch = document.getElementById('search');
const buttonSearch = document.querySelector('button');

buttonSearch.addEventListener('click', () => {
    const value = resultSearch.value;
    if (!value) {
        alert('Veuillez entrer une valeur');
    } else {
        console.log(value);
    }
})


async function init () {
    const recipesArray = await recipes;
    window.addEventListener('load', () => {
        displayRecipes(recipesArray);
    });
    filterManagement();
}

init();