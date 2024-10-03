const criptografar = () => {
    const texto = document.querySelector('.principal__input__caixatexto').value;
    const arrayLetras = texto.split('');
    const textoCriptografado = [];

    for (const letra of arrayLetras) {
        if (letra.match(/[^a-z\s]/)) {
            alert('Não são permitidas letras maiúsculas e caracteres especiais.');
            return;
        }

        if (letra === 'e') {
            textoCriptografado.push('enter');
        } else if (letra === 'i') {
            textoCriptografado.push('imes');
        } else if (letra === 'a') {
            textoCriptografado.push('ai');
        } else if (letra === 'o') {
            textoCriptografado.push('ober');
        } else if (letra === 'u') {
            textoCriptografado.push('ufat');
        } else {
            textoCriptografado.push(letra);
        }
    }

    const inputTitulo = document.getElementById('inputTitulo');
    const outputImagem = document.getElementById('outputImagem');
    const outputTexto = document.getElementById('outputTexto');
    const outputResultado = document.getElementById('outputResultado');
    const outputBotao = document.getElementById('botaoCopiar');

    inputTitulo.style.visibility = 'hidden';
    outputImagem.style.display = 'none';
    outputTexto.style.display = 'none';
    outputResultado.style.display = 'block';
    outputResultado.textContent = textoCriptografado.join('');
    outputBotao.style.display = 'flex';
};

const descriptografar = () => {
    const texto = document.querySelector('.principal__input__caixatexto').value;
    let textoDescriptografado = texto;

    textoDescriptografado = textoDescriptografado.replace(/enter/g, 'e');
    textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
    textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
    textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');

    const inputTitulo = document.getElementById('inputTitulo');
    const outputImagem = document.getElementById('outputImagem');
    const outputTexto = document.getElementById('outputTexto');
    const outputResultado = document.getElementById('outputResultado');
    const outputBotao = document.getElementById('botaoCopiar');

    inputTitulo.style.visibility = 'hidden';
    outputImagem.style.display = 'none';
    outputTexto.style.display = 'none';
    outputResultado.style.display = 'block';
    outputResultado.textContent = textoDescriptografado;
    outputBotao.style.display = 'flex';
};

const copiar = () => {
    const texto = document.querySelector('.principal__output__resultado').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado!');
    });
};