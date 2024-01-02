let previousResults = [];

function filterRecipes(searchValue) {
    const container = document.getElementById('Recette');
    container.innerHTML = '';

    const filteredRecipes = recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const includesSearchValue = recipeName.includes(searchValue) ||
            recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchValue));

        if (includesSearchValue) {
            const recipeTemplate = RecipeTemplate(recipe);
            const card = recipeTemplate.getRecipeCardDOM();
            container.appendChild(card);
        }

        return includesSearchValue;
    });

    previousResults = filteredRecipes;

    // Mettre à jour le nombre de recettes affichées
    const nbrRecettesElement = document.querySelector('.nbr-recettes');
    nbrRecettesElement.textContent = filteredRecipes.length === recipes.length
        ? '1500 recettes'
        : `${filteredRecipes.length} recettes`;
}

const searchElements = document.querySelectorAll('#search-bar, #search-btn-bar');
const searchInput = document.getElementById('search-bar');

// Ajout des events listeners 
for (const element of searchElements) {
    element.addEventListener('search', function () {
        const searchValue = searchInput.value.toLowerCase();
        filterRecipes(searchValue);
    });

    element.addEventListener('click', function () {
        const searchValue = searchInput.value.toLowerCase();
        filterRecipes(searchValue);
    });
}


function filterRecipesByTags(activeOptions) {

    let currentResults = previousResults;

    // Sélectionne uniquement les options actives dans la div .active-option
    const activeOptionTexts = Array.from(document.querySelectorAll('.active-option .option'))
        .map(option => {
            const text = option.textContent.toLowerCase();
            return text;
        });

    const filteredRecipes = currentResults.filter(recipe => {
        const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
        const recipeUstensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());

        const matches = activeOptionTexts.every(optionText =>
            recipeIngredients.includes(optionText) ||
            recipeUstensils.includes(optionText) ||
            recipe.appliance.toLowerCase() === optionText
        );
        return matches;
    });
    return filteredRecipes;
}
