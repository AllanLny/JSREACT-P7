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
    optionLi.setAttribute('data-dropdown', 'IngrédientsDropDown');
    optionLi.textContent = ingredient;
    dropdownOption.appendChild(optionLi);
    ingredientDropdown.appendChild(dropdownOption);
});

const applianceDropdown = document.getElementById('AppareilsDropDown');
allAppliances.forEach(appliance => {
    const dropdownOption = applianceDropdown.querySelector(".dropdown-options")
    const optionLi = document.createElement("li");
    optionLi.className = 'option';
    optionLi.setAttribute('data-dropdown', 'AppareilsDropDown');
    optionLi.textContent = appliance;
    dropdownOption.appendChild(optionLi);
    applianceDropdown.appendChild(dropdownOption);
});

const ustensilDropdown = document.getElementById('UstensilesDropDown');
allUstensils.forEach(ustensil => {
    const dropdownOption = ustensilDropdown.querySelector(".dropdown-options")
    const optionLi = document.createElement("li");
    optionLi.className = 'option';
    optionLi.setAttribute('data-dropdown', 'UstensilesDropDown');
    optionLi.textContent = ustensil;
    dropdownOption.appendChild(optionLi);
    ustensilDropdown.appendChild(dropdownOption);
});

// Filtrage des dropdown 

function Search(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const searchInput = dropdown.querySelector('input[type="search"]');
    const dropdownOptions = dropdown.querySelectorAll('.option');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        dropdownOptions.forEach(option => {
            const optionText = option.textContent.toLowerCase();
            const isMatch = optionText.includes(searchTerm);
            option.style.display = isMatch ? 'block' : 'none';
        });
    });
}
Search('IngrédientsDropDown');
Search('AppareilsDropDown');
Search('UstensilesDropDown');


function DropdownOptionActive() {
    const Options = document.querySelectorAll('.option');
    const activeOptionContainer = document.querySelector('.active-option');

    Options.forEach(option => {
        option.addEventListener('click', () => {
            if (option.classList.contains('active')) {
                // Si l'option est active, déterminer à quel dropdown elle appartient
                const dropdownClass = option.getAttribute('data-dropdown');
                const dropdown = document.querySelector(`#${dropdownClass} .dropdown-options`);
                option.classList.remove('active');
                dropdown.appendChild(option);

            } else {
                option.classList.add('active');
                activeOptionContainer.appendChild(option);
                const optionClose = document.createElement("i");
                optionClose.className = 'fa-solid fa-x';
                option.appendChild(optionClose);
            }
        });
    });
}
DropdownOptionActive();
