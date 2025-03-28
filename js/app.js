// Variável global para armazenar o valor total do carrinho
let valorTotal;

// Função para exibir e corrigir o valor total ao carregar a página
function mostrarValorTotal() { 
    console.log('Valor total antes da conversão:', valorTotal);
    
    // Verifica se o valor total é uma string válida e contém o caractere "R$"
    if (typeof valorTotal === 'string' && valorTotal.includes('R$')) {
        valorTotal = parseInt(valorTotal.replace('R$', '').trim()); 
    } else {
        valorTotal = 0; // Se não for válido, inicializa como 0
    }
    
    console.log('Valor total depois da conversão:', valorTotal);
}

// Função para adicionar produtos ao carrinho
function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    
    // Validação da quantidade inserida
    if (quantidade < 1 || isNaN(quantidade)) {
        alert('Quantidade inválida! Insira um valor maior que 0.');
        document.getElementById('quantidade').value = ''; 
        return; // Sai da função para evitar execução desnecessária
    }

    // Obtém o preço do produto a partir do último número encontrado na string
    let precoProduto = parseInt(produto.match(/\d+/g).pop()) * quantidade;
    let nomeProduto = produto.split('-')[0].trim();
    let listaDeProdutos = document.getElementById('lista-produtos');
    let Total = document.getElementById('valor-total');

    // Adiciona o produto na lista do carrinho
    listaDeProdutos.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
        </section>`;
    
    // Atualiza o valor total
    valorTotal += precoProduto;
    Total.innerHTML = `R$ ${valorTotal}`;
}

// Evento para inicializar o valor total quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    let totalElemento = document.getElementById('valor-total').innerHTML;
    valorTotal = totalElemento ? parseInt(totalElemento.replace('R$', '').trim()) : 0;
    mostrarValorTotal();
});

// Função para limpar o carrinho
function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    valorTotal = 0; // Resetando o valor total
}

// Função para capturar e exibir os dados do formulário
function enviarFormulario() {
    let nome = document.getElementById('Nome').value;
    let email = document.getElementById('Email').value;
    let senha = document.getElementById('Senha').value;

    let nomes = nome.split(',');
    console.log('Primeiro nome:', nomes[0] || "Não informado");
    console.log('Segundo nome:', nomes[1] || "Não informado");

    // Exibe cada caractere da senha
    for(let i = 0; i < senha.length; i++){
        console.log(senha[i]);
    }

    alert(`${nome}\n${email}\n${senha}`);

    // Alteração visual do botão após envio
    let botaoEnviar = document.getElementById('botao-enviar');
    botaoEnviar.style.backgroundColor = 'black';
    botaoEnviar.textContent = 'Enviado';
}
