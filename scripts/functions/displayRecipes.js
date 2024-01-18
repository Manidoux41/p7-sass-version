export function displayRecipes(recipes) {
    recipes.forEach(recipe => {
        const transformId = recipe.id.toString().padStart(2, '0');
        const containerResult = document.getElementById('results');
        containerResult.innerHTML += `
            <div class="recipeCard">
                <div  class="recipeCard__imgContainer">
                    <img data-src="../../assets/conver-images/${recipe.image}" alt="${recipe.name}" class="lazyload" fetchpriority="high"/>
                </div>
               
                <div class="recipeCard__infos">
                    <h2 class=cardTitle>${recipe.name}</h2>
                    <div class="cardSection">
                        <h3 class="cardsectiontitle">Recette</h3>
                        <div class="cardSection__description">
                            <p>${recipe.description}</p>
                        </div>
                    </div>
                    <div class="cardSection">
                        <h3 class="cardsectiontitle">Ingredient</h3>
                        <p>${recipe.ingredients.map(ingredient => ingredient.ingredient).join(', ')}</p>
                    </div>
                </div>
            </div>
        `
    });
}