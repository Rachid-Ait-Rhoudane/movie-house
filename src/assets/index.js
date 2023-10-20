window.onload = function () {
    let burgerIcon = document.getElementById("burger-icon");
    let menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });
}

