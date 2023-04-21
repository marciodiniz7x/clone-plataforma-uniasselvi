// Seleciona elementos
let menuAberto = false;
const subitem01 = document.querySelector('.subitem01');
const subitem02 = document.querySelector('.subitem02');
const subitem03 = document.querySelector('.subitem03');
const containerUni01 = document.querySelector('.container-uni01');
const setaUni01 = document.querySelector('.seta-uni01');

// Função para o botão de colapso
function toggleMenu() {
    const lateral = document.querySelector(".lateral");
    const banner = document.querySelector('.banner-inicio');

    const topo = document.querySelector('.topo');

    if (menuAberto === false) {
        
        // Caso fechado abrir menu
        lateral.style.transform = "translateX(-100%)";
        banner.style.left = '-280px';
        lateral.style.boxShadow = 'none';
        topo.style.background = 'var(--bg-preto-transparente)';
        menuAberto = true;

    } else {
        
        // Caso aberto fechar menu
        lateral.style.transform = "translateX(0%)";
        banner.style.left = '0';
        topo.style.backgroundColor = 'var(--bg-preto)';
        menuAberto = false;
        lateral.style.boxShadow = '';
    }

}

// Retrai o conteúdo da unidade
containerUni01.addEventListener('click', () => {

    subitem01.classList.toggle('sumir');
    subitem02.classList.toggle('sumir');
    subitem03.classList.toggle('sumir');
    if (setaUni01.innerHTML === 'expand_more') {
        setaUni01.innerHTML = 'expand_less';
    } else {
        setaUni01.innerHTML = 'expand_more';
    }
    
})