/* JavaScript para manipulação de elementos na página */

function mudarTexto() {
    document.getElementById('texto1').innerText = 'Vai Brasil ⚽!'; /*- Altera o texto do elemento com id "texto1" para "Vai Brasil ⚽!" */
}

function mudarCor() {
    document.getElementById('texto1').style.color = 'red'; /*- Altera a cor do texto do elemento com id "texto1" para vermelho */
}

function mudarTamanho() {
    document.getElementById('texto1').style.fontSize = '24px'; /*- Altera o tamanho do texto do elemento com id "texto1" para 24px */
}

function mudarEstilo() {
    var texto = document.getElementById('texto1'); /*- Obtém o elemento com id "texto1" e armazena na variável "texto" */
    if (texto.style.fontWeight === 'bold') { /*- Verifica se o estilo de fonte do elemento é "bold" (negrito) */
        texto.style.fontWeight = 'normal'; /*- Se for "bold", altera para "normal" (normal) */
        texto.style.fontStyle = 'normal'; /*- Altera o estilo de fonte para "normal" (normal) */
    } else {
        texto.style.fontWeight = 'bold'; /*- Se não for "bold", altera para "bold" (negrito) */
        texto.style.fontStyle = 'italic'; /*- Altera o estilo de fonte para "italic" (itálico) */
    }
}

function mostrarCaixaTexto() {
    var caixa = document.getElementById('caixaNovoTexto'); /*- Obtém o elemento com id "caixaNovoTexto" e armazena na variável "caixa" */
    caixa.style.display = 'block'; /*- Altera o estilo de exibição do elemento para "block", tornando-o visível */
}

function mostrarMsg(id, texto) { /*- Função que recebe um id de elemento e um texto, e altera o texto do elemento com o id especificado para o texto fornecido */
    document.getElementById(id).innerText = texto; /*- Altera o texto do elemento com o id especificado para o texto fornecido */
}

function salvarMensagem() { /*- Função para salvar a mensagem digitada pelo usuário e exibi-la no elemento com id "texto1" */
    var textoUsuario = document.getElementById('novoTexto').value; /*- Obtém o valor digitado pelo usuário no elemento com id "novoTexto" e armazena na variável "textoUsuario" */
    if (textoUsuario.trim() === '') { /*- Verifica se o texto digitado pelo usuário está vazio ou contém apenas espaços em branco */
        textoUsuario = 'Mensagem salva sem texto.'; /*- Se estiver vazio, atribui uma mensagem padrão à variável "textoUsuario" */
    }
    var texto1 = document.getElementById('texto1'); /*- Obtém o elemento com id "texto1" e armazena na variável "texto1" */
    texto1.innerText = textoUsuario + ' Vai Brasil';
    document.getElementById('novoTexto').value = '';
}

function trocarImagem() { /*- Função para trocar a imagem exibida no elemento com id "imagem1" */
    var imagem = document.getElementById('imagem1'); /*- Obtém o elemento com id "imagem1" e armazena na variável "imagem" */
    if (imagem.src.endsWith('CopaDoBrasil.png')) {
        imagem.src = 'imagem/imagem3.jpeg';
    } else {
        imagem.src = 'imagem/CopaDoBrasil.png';
    }
}


function esconderTexto() { /*- Função para mostrar ou ocultar o elemento com id "texto2" */
    var texto = document.getElementById('texto2');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none';
    }
}

function esconderEmoji() { /*- Função para mostrar ou ocultar o elemento com id "emoji1" */
    var emoji = document.getElementById('emoji1'); /*- Obtém o elemento com id "emoji1" e armazena na variável "emoji" */
    if (emoji.style.display === 'none') {
        emoji.style.display = 'block';
    } else {
        emoji.style.display = 'none';
    }
}

function esconderImagem3() { /*- Função para mostrar ou ocultar o elemento com id "imagem3" */
    var imagem = document.getElementById('imagem3'); /*- Obtém o elemento com id "imagem3" e armazena na variável "imagem" */
    if (imagem.style.display === 'none') {
        imagem.style.display = 'block';
    } else {
        imagem.style.display = 'none';
    }
}
