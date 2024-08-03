function votar() {
    const idade = parseInt(document.getElementById('idad').value);
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cepefe').value;
    
    // Limpa qualquer conteúdo anterior
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.remove();
    }
    
    // Cria uma nova div para mostrar o resultado
    const newDiv = document.createElement('div');
    newDiv.id = 'result';
    newDiv.style.marginTop = '20px';
    
    if (isNaN(idade)) {
        newDiv.innerHTML = '<p>Por favor, insira uma idade válida.</p>';
    } else if (idade >= 18 && idade <= 70) {
        newDiv.innerHTML = '<h2>Você é obrigado a votar</h2>';
        newDiv.innerHTML += '<p>Eu sou lindo?</p>';
        newDiv.innerHTML += '<button onclick="responder(\'sim\')">Sim</button>';
        newDiv.innerHTML += '<button onclick="responder(\'não\')">Não</button>';
    } else if ((idade >= 16 && idade < 18) || idade > 70) {
        newDiv.innerHTML = '<h2>Você pode votar</h2>';
        newDiv.innerHTML += '<p>Eu sou lindo?</p>';
        newDiv.innerHTML += '<button onclick="responder(\'sim\')">Sim</button>';
        newDiv.innerHTML += '<button onclick="responder(\'não\')">Não</button>';
    } else {
        newDiv.innerHTML = '<h2>Você não pode votar</h2>';
    }
    
    document.body.appendChild(newDiv);
}

function responder(resposta) {
    alert(`Você respondeu: ${resposta}`);
}
