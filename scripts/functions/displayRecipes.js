export function displayRecipes(recipes) {
    recipes.forEach(recipe => {
        const transformId = recipe.id.toString().padStart(2, '0');
        const containerResult = document.getElementById('results');
        containerResult.innerHTML += `
            <div class="recipeCard">
            <div class="recipeCard__imgContainer">
                <picture>
                    <source srcset="../../assets/images/Recette${transformId}.jpg" type="image/jpg" />
                    <source srcset="../../assets/convert-images/${recipe.image}" type="image/webp" />
                    <img src="../../assets/convert-images/${recipe.image}" alt="${recipe.name}" />
                </picture>
            </div>
                
             
                <div class="recipeCard__infos">
                    <h2>${recipe.name}</h2>
                    <p>${recipe.ingredients.map(ingredient => ingredient.ingredient).join(', ')}</p>
                </div>
            </div>
        `
    });
}