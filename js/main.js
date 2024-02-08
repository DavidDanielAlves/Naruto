
const personagens = document.querySelectorAll('.container-personagem');
const btsPersonagens = document.querySelectorAll('.botao-personagem');

btsPersonagens.forEach(botao => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.botao-personagem.ativo');
        botaoSelecionado.classList.remove('ativo')

        botao.classList.add('ativo');

        const idBotaoClicado = botao.id;

        const personagemMostrado = document.querySelector(`.container-personagem.ativo`);
        personagemMostrado.classList.remove('ativo'); 

        const personagemEscolhido = document.querySelector(`.container-personagem.container-${idBotaoClicado}`);
        personagemEscolhido.classList.add('ativo');

        document.body.setAttribute('data-background', `${idBotaoClicado}`);
    })
})