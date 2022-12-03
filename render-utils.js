export function renderRecipe(recipe) {
    const div = document.createElement('div');
    div.classList.add('recipe-box');

    const recipeEl = document.createElement('a');
    recipeEl.href = `./details/?id=${recipe.id}`;

    const h4 = document.createElement('h4');
    h4.textContent = recipe.name;
    h4.classList.add('recipe-header');

    const p = document.createElement('p');
    p.textContent = `Category: ${recipe.type}`;

    const p2 = document.createElement('p');
    p2.textContent = `Season: ${recipe.season}`;

    const p3 = document.createElement('p');
    p3.textContent = `Made before? ${recipe.have_made}`;

    const p4 = document.createElement('p');
    p4.textContent = `Expectations? ${recipe.excitement_level}`;

    recipeEl.append(h4, p, p2, p3, p4);

    div.append(recipeEl);
    return div;
}

export function renderRecipeDetail() {}
