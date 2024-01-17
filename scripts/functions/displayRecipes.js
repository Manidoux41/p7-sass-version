export function displayRecipes(recipes) {
    recipes.forEach(recipe => {
        const transformId = recipe.id.toString().padStart(2, '0');
        const containerResult = document.getElementById('results');
        containerResult.innerHTML += `
            <div class="recipeCard">
                <picture fetchpriority="high" class="recipeCard__imgContainer">
                    <source srcset="../../assets/conver-images/${recipe.image}" type="image/webp">
                    <img src="../../assets/conver-images/${recipe.image}" alt="${recipe.name}" />
                </picture>
               
                <div class="recipeCard__infos">
                    <h2>${recipe.name}</h2>
                    <p>${recipe.ingredients.map(ingredient => ingredient.ingredient).join(', ')}</p>
                </div>
            </div>
        `
    });
}