
let menuAberto = false;
// Função para o botão de colapso
function toggleMenu() {
    const lateral = document.querySelector(".lateral");
    const bannerShadow = document.querySelector('.banner-inicio');
    const rodape = document.querySelector('.footer01');

    const topo = document.querySelector('.topo');

    if (menuAberto === false) {
        
        lateral.style.transform = "translateX(-100%)";
        topo.style.background = 'var(--bg-preto-transparente)';
        menuAberto = true;

    } else {
        
        lateral.style.transform = "translateX(0%)";
        topo.style.backgroundColor = 'var(--bg-preto)';
        menuAberto = false;
        
    }

}