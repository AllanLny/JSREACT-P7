const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const dropdownBtn = dropdown.querySelector(".dropdown-btn");
    const dropdownOption = dropdown.querySelector(".dropdown-options");
    const angleDown = dropdownBtn.querySelector(".fa-angle-down");

    dropdownBtn.addEventListener('click', () => {
        if (dropdownBtn.parentElement.classList.contains("active")) {
            dropdownOption.style.display = "none";
            dropdownBtn.parentElement.classList.remove("active");
            angleDown.classList.remove("fa-angle-up");
            angleDown.classList.add("fa-angle-down");

        }
        else {
            console.log(angleDown)
            dropdownBtn.parentElement.classList.add("active")
            dropdownOption.style.display = "flex";
            angleDown.classList.remove("fa-angle-down");
            angleDown.classList.add("fa-angle-up");
        }
    })
})

const allIngredients = Array.from(new Set([].concat(...recipes.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient)))));


const allAppliances = Array.from(new Set(recipes.map(recipe => recipe.appliance)));



const allUstensils = Array.from(new Set([].concat(...recipes.map(recipe => recipe.ustensils))));


const ingredientDropdown = document.getElementById('IngrédientsDropDown');
allIngredients.forEach(ingredient => {
    const dropdownOption = ingredientDropdown.querySelector(".dropdown-options")
    const optionLi = document.createElement("li");
    optionLi.className = 'option';
    optionLi.textContent = ingredient;
    dropdownOption.appendChild(optionLi);
    ingredientDropdown.appendChild(dropdownOption);
});

const applianceDropdown = document.getElementById('AppareilsDropDown');
allAppliances.forEach(appliance => {
    const dropdownOption = applianceDropdown.querySelector(".dropdown-options")
    const optionLi = document.createElement("li");
    optionLi.className = 'option';
    optionLi.textContent = appliance;
    dropdownOption.appendChild(optionLi);
    applianceDropdown.appendChild(dropdownOption);
});

const ustensilDropdown = document.getElementById('UstensilesDropDown');
allUstensils.forEach(ustensil => {
    const dropdownOption = ustensilDropdown.querySelector(".dropdown-options")
    const optionLi = document.createElement("li");
    optionLi.className = 'option';
    optionLi.textContent = ustensil;
    dropdownOption.appendChild(optionLi);
    ustensilDropdown.appendChild(dropdownOption);
});
