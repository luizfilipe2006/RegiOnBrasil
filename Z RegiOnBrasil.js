let lastScrollTop = 0; // Guarda a última posição de rolagem

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll para baixo, esconde o menu
        document.querySelector('.navbar').classList.add('hide');
    } else {
        // Scroll para cima, mostra o menu
        document.querySelector('.navbar').classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        const bgClass = this.getAttribute('data-bg');

        // Mudar a cor das fontes
        document.querySelectorAll('.section').forEach(section => {
            section.style.color = color;
        });

        // Mudar as imagens de fundo
        document.querySelectorAll('.parallax').forEach((parallax, index) => {
            parallax.style.backgroundImage = `url('img/PARALLAX_${index + 1}_${bgClass}.png')`;
        });
    });
});
