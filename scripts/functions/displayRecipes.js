export function displayRecipes(recipes) {
    recipes.forEach(recipe => {
        const containerResult = document.getElementById('results');
        containerResult.innerHTML += `
            <div class="recipeCard">
                <img src="../../assets/images/${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.ingredients.map(ingredient => ingredient.ingredient).join(', ')}</p>
            </div>
        `
    });
}