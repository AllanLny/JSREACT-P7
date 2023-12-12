const dropdowns = document.querySelectorAll(".dropdown");
var dropdownBtn = [];

dropdowns.forEach(dropdown => {
    dropdownBtn.push(dropdown.querySelector(".dropdown-btn"));
});

dropdownBtn.forEach(dropdown => {
    const dropdownContent = dropdown.parentElement.querySelector(".content");
    const angleDown = dropdown.querySelector(".fa-solid.fa-angle-down");
    const dropdownOption = dropdownContent.querySelector(".dropdown-options");
    const optionLi = dropdownOption.querySelectorAll(".option");

    dropdown.addEventListener('click', () => {
        if (dropdown.parentElement.classList.contains("active")) {
            dropdownContent.style.display = "none";
            dropdownOption.style.display = "none";
            dropdown.parentElement.classList.remove("active");
            angleDown.classList.remove("fa-angle-up");
            angleDown.classList.add("fa-angle-down");

        }
        else {
            dropdown.parentElement.classList.add("active")
            dropdownContent.style.display = "block";
            dropdownOption.style.display = "block";
            angleDown.classList.remove("fa-angle-down");
            angleDown.classList.add("fa-angle-up");
        }
    })
})

const allIngredients = recipes.reduce((acc, recipe) => {
    recipe.ingredients.forEach(ingredient => {
        if (!acc.includes(ingredient.ingredient)) {
            acc.push(ingredient.ingredient);
        }
    });
    return acc;
}, []);

const allAppliances = recipes.reduce((acc, recipe) => {
    if (!acc.includes(recipe.appliance)) {
        acc.push(recipe.appliance);
    }
    return acc;
}, []);

const allUstensils = recipes.reduce((acc, recipe) => {
    recipe.ustensils.forEach(ustensil => {
        if (!acc.includes(ustensil)) {
            acc.push(ustensil);
        }
    });
    return acc;
}, []);

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
