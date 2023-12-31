function searchRecipes() {
    var searchTerm = document.querySelector(".form-control").value.toLowerCase();

    if (searchTerm === "sarma") {
        window.location.href = "sarma.html";
    } else if (searchTerm === "salata") {
        window.location.href = "cevizlisalata.html";
    } else if (searchTerm === "tiramisu") {
        window.location.href = "tiramisu.html";
    }
}
