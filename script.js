
// Função para o botão de colapso
function toggleMenu() {
    const menu = document.querySelector(".lateral");
    const bannerShadow = document.querySelector('.banner-inicio');
    const rodape = document.querySelector('.footer01');

    const topo = document.querySelector('.topo');

    if (menu.style.display === "none") {

        menu.style.display = "block";
        
        // rodape.style.borderLeft = "2px solid #E6E6E6";
        // Modifica o cabeçalho:
        
        setTimeout(() => {
            topo.style.backgroundColor = 'var(--bg-preto)';
        }, 10);
        
        
    } else {

        menu.style.display = "none";
        // bannerShadow.style.borderLeft = "none";
        // Modifica o cabeçalho:
        
        topo.style.background = 'var(--bg-preto-transparente)';
        
        
    }
}