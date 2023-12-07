const dropdowns = document.querySelectorAll(".dropdown");
var dropdownBtn = [];

dropdowns.forEach(dropdown => {
    dropdownBtn.push(dropdown.querySelector(".dropdown-btn"));
});

dropdownBtn.forEach(dropdown => {
    const dropdownContent = dropdown.parentElement.querySelector(".content");

    dropdown.addEventListener('click', () => {
        if (dropdown.parentElement.classList.contains("active")) {
            dropdownContent.style.display = "none";
            dropdown.parentElement.classList.remove("active")
        }
        else {
            dropdown.parentElement.classList.add("active")
            dropdownContent.style.display = "block";
        }
    })
})