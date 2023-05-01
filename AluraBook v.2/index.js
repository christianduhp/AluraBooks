async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertido = await consultaCEP.json()
        if (consultaCEPConvertido.erro) {
            throw Error('Cep não existente!');
        }
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        logradouro.value = consultaCEPConvertido.logradouro
        bairro.value = consultaCEPConvertido.bairro
        cidade.value = consultaCEPConvertido.localidade
        estado.value = consultaCEPConvertido.uf

        console.log(consultaCEPConvertido);
        return consultaCEPConvertido;

        } catch(erro) {
            mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
            console.log(erro);

        }
    }

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value))







// O await é uma palavra-chave do JavaScript que só pode ser usada dentro de uma função assíncrona (async). Quando você usa await antes de uma promessa (Promise), o código pausa a execução da função assíncrona até que a promessa seja resolvida ou rejeitada.
// Isso é especialmente útil quando você está trabalhando com APIs ou outras chamadas de função que precisam esperar a conclusão de uma tarefa antes de continuar com outra. Em vez de ter que encadear uma série de callbacks, o uso de await pode tornar o código mais legível e fácil de seguir.
