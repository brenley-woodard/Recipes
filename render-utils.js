export function renderRecipe(recipe) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    h4.textContent = recipe.name;
    p.textContent = recipe.type;
    p2.textContent = recipe.season;
    p3.textContent = recipe.have_made;
    p4.textContent = recipe.excitement_level;

    div.append(h4, p, p2, p3, p4);

    return div;
}
