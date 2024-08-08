const criptografar = () => {
    const texto = document.querySelector('.principal__entrada__caixatexto').value;
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

    const entradaTitulo = document.getElementById('entradaTitulo');
    const saidaImagem = document.getElementById('saidaImagem');
    const saidaTexto = document.getElementById('saidaTexto');
    const saidaResultado = document.getElementById('saidaResultado');
    const saidaBotao = document.getElementById('saidaBotao');

    entradaTitulo.style.visibility = 'hidden';
    saidaImagem.style.display = 'none';
    saidaTexto.style.display = 'none';
    saidaResultado.textContent = textoCriptografado.join('');
    saidaBotao.style.display = 'flex';
}

const descriptografar = () => {
    const texto = document.querySelector('.principal__entrada__caixatexto').value;
    let textoDescriptografado = texto;

    textoDescriptografado = textoDescriptografado.replace(/enter/g, 'e');
    textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
    textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
    textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');

    const entradaTitulo = document.getElementById('entradaTitulo');
    const saidaImagem = document.getElementById('saidaImagem');
    const saidaTexto = document.getElementById('saidaTexto');
    const saidaResultado = document.getElementById('saidaResultado');
    const saidaBotao = document.getElementById('saidaBotao');

    entradaTitulo.style.visibility = 'hidden';
    saidaImagem.style.display = 'none';
    saidaTexto.style.display = 'none';
    saidaResultado.textContent = textoDescriptografado;
    saidaBotao.style.display = 'flex';
}

const copiar = () => {
    const texto = document.querySelector('.principal__saida__resultado').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado!');
    });
}