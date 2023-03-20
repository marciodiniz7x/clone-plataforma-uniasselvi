
let menuAberto = false;
const subitem01 = document.querySelector('.subitem01');
// Função para o botão de colapso
function toggleMenu() {
    const lateral = document.querySelector(".lateral");
    const banner = document.querySelector('.banner-inicio');
    const rodape = document.querySelector('.footer01');

    const topo = document.querySelector('.topo');

    if (menuAberto === false) {
        
        lateral.style.transform = "translateX(-100%)";
        banner.style.left = '-280px';
        lateral.style.boxShadow = 'none';
        topo.style.background = 'var(--bg-preto-transparente)';
        menuAberto = true;

    } else {
        
        lateral.style.transform = "translateX(0%)";
        banner.style.left = '0';
        topo.style.backgroundColor = 'var(--bg-preto)';
        menuAberto = false;
        lateral.style.boxShadow = '';
        
    }

}

// Evento que muda a cor do subitem quando navegando por ele
subitem01.addEventListener('click', () => {

    event.preventDefault();

      // adiciona a classe 'clickado' com um pequeno atraso
    setTimeout(function() {
        subitem01.classList.add('clickado');
    }, 10);

    // redireciona para a página do link após um breve atraso
    setTimeout(function() {
        window.location = subitem01.href;
    }, 100);

});