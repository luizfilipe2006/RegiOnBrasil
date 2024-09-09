// MENU RECOLHÍVEL
let lastScrollTop = 0; // guarda a última posição de rolagem do menu

window.addEventListener("scroll", function() { // "sempre que o usuário rolar a página, executara a função fornecida"
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
// ⬆ "let currentScroll" guarda a posição atual de rolagem
// ⬆ "window.pageYOffset:" obtém a quantidade de pixels que o documento foi rolado verticalmente a partir do topo da janela de visualização
// ⬆ "document.documentElement.scrollTop;" forma antiga de retornar a quantidade de rolagem vertical do elemento <html>
// ⬆ "||" se a primeira afirmação for falsa passa para o método antigo
    if (currentScroll > lastScrollTop) {
        // ⬆ se a posição atual de rolagem for maior (estiver mais distante) que a última posição ele esconde o menu
        document.querySelector('.navbar').classList.add('hide');
    } else {
        // ⬆ ao contrário o menu será mostrado
        document.querySelector('.navbar').classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // para evitar valores negativos
});

// BOTÕES PERSONALIZADOS
document.querySelectorAll('.color-btn').forEach(button => { 
    // ⬆ seleciona todos os botões com a classe color-btn e aplica a função fornecida a cada um deles
    button.addEventListener('click', function() { // quando o botão sofrer um click ele executará a função
        const color = this.getAttribute('data-color');
        // ⬆ extrai o valor do atributo data-color do botão que foi clicado e o armazena na constante color (armazena o hexadecimal #)
        const bgClass = this.getAttribute('data-bg');
        // ⬆ extrai o valor do atributo data-bg do botão clicado e o armazena na constante bgClass (armazena a nomenclatura da cor do png)
        document.querySelectorAll('.section').forEach(section => {
            // ⬆⬇ pega todos os elementos com a classe section e aplica a função fornecida a cada um deles (muda a fonte)
            section.style.color = color;
        });

        document.querySelectorAll('.parallax').forEach((parallax, index) => {
            // ⬆ percorre todos os elementos que têm a classe parallax e executa a função fornecida para cada um deles
            parallax.style.backgroundImage = `url('img/PARALLAX_${index + 1}_${bgClass}.png')`;
            // ⬆ "${index + 1}_$" seleciona o número na nomenclatura ex: 'img/PARALLAX_1_{bgClass}.png
            // ⬆ {bgClass} seleciona o nome da cor na nomenclatura ex: 'img/PARALLAX_${index + 1}_amarelo.png
        });
    });
});