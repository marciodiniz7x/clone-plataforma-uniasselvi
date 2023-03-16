
// Função para o botão de colapso
function toggleMenu() {
    const menu = document.getElementById("menu");
    const bannerShadow = document.querySelector('.banner-inicio');
    const rodape = document.querySelector('.footer01');
    if (menu.style.display === "block") {
        menu.style.display = "none";
        bannerShadow.style.borderLeft = "none";
        rodape.style.borderLeft = "none";
    } else {
        menu.style.display = "block";
        bannerShadow.style.borderLeft = "2px solid #E6E6E6";
        rodape.style.borderLeft = "2px solid #E6E6E6";
    }
}