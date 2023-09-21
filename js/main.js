
const naruto = document.querySelector('#naruto');
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    
    personagem.addEventListener('click', () => {

        removerSelecao();
    
        personagem.classList.add('ativo');
            
        alterarPersongem(personagem.id);
    
        mudarTextoPersonagem(personagem.id);
            
    })
})

function removerSelecao() {
    const personagemSelecionado = document.querySelector('.ativo');
    personagemSelecionado.classList.remove('ativo');
}

function alterarPersongem(idPersonagem) {
    const imagemPersonagem = document.querySelector('.imagem-principal');
    imagemPersonagem.src = `../imgs/${idPersonagem}.png`;
}



function mudarTextoPersonagem (idPersonagem) {
    const texto = document.querySelector('.paragrafo-cabecalho');

    if (idPersonagem === 'naruto') {
        texto.innerHTML = `
        <p>Naruto Uzumaki é um personagem icônico no mundo do anime e do mangá, criado por
            Masashi Kishimoto. Sua história é a saga de um jovem ninja que enfrentou adversidades desde o nascimento,
            sendo o hospedeiro da terrível besta de nove caudas, o Kyuubi. No entanto, Naruto nunca permitiu que sua
            origem o definisse, e em vez disso, ele se dedicou a provar seu valor para a vila de Konoha.</p>
        `
    }

    if (idPersonagem === 'sakura') {
        texto.innerHTML = `
        <p>Sakura Haruno é uma personagem importante no universo de "Naruto". Ela é uma kunoichi (uma ninja feminina) da Vila da Folha, também conhecida como Konoha, e desempenha um papel fundamental na história, principalmente como membro do Time 7, juntamente com Naruto Uzumaki e Sasuke Uchiha.</p>
        `
    }

    if (idPersonagem === 'sasuke') {
        texto.innerHTML = `
        <p>Sasuke Uchiha é um dos personagens mais icônicos e complexos da série "Naruto". Ele é introduzido como um dos membros do Time 7, junto com Naruto Uzumaki e Sakura Haruno, e desempenha um papel crucial na trama.Sasuke é descendente do clã Uchiha, uma família de renomados shinobi conhecida por suas habilidades excepcionais e pelo Sharingan, um poderoso doujutsu (técnica ocular).</p>
        `
    }

    if (idPersonagem === 'kakashi') {
        texto.innerHTML = `
        <p>Kakashi Hatake é um personagem notável na série "Naruto", criada por Masashi Kishimoto. Ele é um ninja experiente e altamente respeitado na Vila da Folha, conhecida como Konoha, e desempenha um papel significativo na vida dos personagens principais, Naruto Uzumaki, Sasuke Uchiha e Sakura Haruno.</p>
        `
    }

    if(idPersonagem === 'jiraya') {
        texto.innerHTML = `
        <p>Jiraiya, também conhecido como o "Sábio dos Sapos", é um personagem icônico na série Naruto. Ele é um dos lendários Sannin, um trio de ninjas extraordinariamente poderosos e respeitados. Jiraiya é famoso por seu caráter excêntrico, sua paixão pela escrita de livros eróticos e sua habilidade incrível como mestre em jutsus de invocação, que lhe permite convocar sapos gigantes para auxiliá-lo em batalha. </p>
        `
    }

    if (idPersonagem === 'tsunade') {
        texto.innerHTML = `
        <p>Tsunade, também conhecida como a "Princesa Slug" e a "Deusa dos Sapos", é outra figura notável na série Naruto. Ela é uma das lendárias Sannin, um trio de ninjas lendários ao lado de Jiraiya e Orochimaru. Tsunade é famosa por suas habilidades médicas excepcionais, sendo uma das mais renomadas ninja médicas de todos os tempos.</p>
        `
    }
}
