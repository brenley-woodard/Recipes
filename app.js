/* Imports */
import { getRecipes } from './fetch-utils.js';
import { renderRecipe } from './render-utils.js';
/* Get DOM Elements */
const recipesContainer = document.getElementById('recipe-list-container');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const recipes = await getRecipes();

    for (let recipe of recipes) {
        const recipeEl = renderRecipe(recipe);
        recipesContainer.append(recipeEl);
    }
});

/* Display Functions */
