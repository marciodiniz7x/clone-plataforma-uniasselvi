
// Função para o botão de colapso
function toggleMenu() {
    const menu = document.getElementById("menu");
    const bannerShadow = document.querySelector('.banner-inicio');
    const rodape = document.querySelector('.footer01');

    const topo = document.querySelector('.topo');

    if (menu.style.display === "none") {

        menu.style.display = "block";
        bannerShadow.style.borderLeft = "2px solid #E6E6E6";
        rodape.style.borderLeft = "2px solid #E6E6E6";
        // Modifica o cabeçalho:
        topo.style.position = 'var(--position-static)';
        topo.style.background = 'var(--bg-preto)';
        topo.style.transition = '0s';
        
        
        
    } else {

        menu.style.display = "none";
        bannerShadow.style.borderLeft = "none";
        rodape.style.borderLeft = "none";
        // Modifica o cabeçalho:
        topo.style.position = 'var(--position-fixed)';
        topo.style.background = 'var(--bg-preto-transparente)';
        topo.style.transition = '300ms';
        
    }
}