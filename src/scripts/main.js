document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocutaElementosDoHeader();
        }else {
         exibeElementosDoHeader();
        }
    })
})

function ocutaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}




