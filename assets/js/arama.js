function searchRecipes() {
    var searchTerm = document.querySelector(".form-control").value.toLowerCase();

    if (searchTerm === "sarma") {
        window.location.href = "sarma.html";
    } else if (searchTerm === "salata") {
        window.location.href = "salatalar.html";
    } else if (searchTerm === "tiramisu") {
        window.location.href = "tiramisu.html";
    } else if (searchTerm === "cevizlisalata") {
        window.location.href = "cevizlisalata.html";
    } else if (searchTerm === "çorba") {
        window.location.href = "corbalar.html";
    } else if (searchTerm === "ezogelin") {
        window.location.href = "ezogelin.html";
    } else if (searchTerm === "mantar") {
        window.location.href = "mantar.html";
    } else if (searchTerm === "mantı") {
        window.location.href = "milfoymanti.html";
    } else if (searchTerm === "tatlı") {
        window.location.href = "tatlliler.html";
    } else if (searchTerm === "soğan") {
        window.location.href = "sogan.html";
    } else if (searchTerm === "yoğurt") {
        window.location.href = "yogurt.html";
    }
}
