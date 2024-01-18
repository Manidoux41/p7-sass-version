import { recipes } from './datas/recipes.js';
import { displayRecipes } from './functions/displayRecipes.js';

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
    displayRecipes(recipesArray);
}

init();