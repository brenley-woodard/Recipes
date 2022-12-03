import { getRecipeById } from '../fetch-utils.js';
import { renderDetail } from '../render-utils.js';

const detailCard = document.getElementById('detail-card');

window.addEventListener('load', async () => {
    const detail = new URLSearchParams(window.location.search);
    const id = detail.get('id');

    const recipe = await getRecipeById(id);

    const recipeDetailEl = renderDetail(recipe);
    detailCard.append(recipeDetailEl);
});
