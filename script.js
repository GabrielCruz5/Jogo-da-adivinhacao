/* 
    1. Deixar que o limite máximo seja de 1 a 100
    2. Fazer que seja gerado um número aleatório de 1 a 100 e que seja guardado em uma variável
    3. Colocar limite máximo de tentativas em 10 e ir descendo conforme o jogador vá chutando
    4. Colocar dicas se o número aleatório gerado é maior ou menor
    5. Informar os número já colocados no input
    6. Deixar em loop até o jogador acertar o número correto
*/


let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Tentativas
    let tentativasRestantes = 10;
    let numerosChutados = [];

// Obter elementos
    const input = document.querySelector("input");
    const botao = document.getElementById("chutar");
    const dica = document.getElementById("dica");
    const tentativasTexto = document.getElementById("tentativasRestantes");
    const listaChutes = document.getElementById("numerosChutados");
    const botaoReiniciar = document.getElementById("reiniciar");

// Atualiza tentativas na tela
tentativasTexto.textContent = `❤️ Vidas Restantes: ${tentativasRestantes}`;

// Evento do botão
    botao.addEventListener("click", function() {
        const chute = parseInt(input.value);
    

// Validação
    if (chute < 1 || chute > 100 || isNaN(chute)) {
        dica.textContent = "Digite um número válido entre 1 e 100!";
        return;
    }

// Guarda o número chutado
    numerosChutados.push(chute);
    listaChutes.textContent = `Números que você já chutou: ${numerosChutados.join(", ")}`;

     tentativasRestantes--;

// Verifica o chute
    if (chute === numeroSecreto) {
        dica.textContent = "🎉 Parabéns! Você acertou em cheio!!";
        encerrarJogo();
    } else if (tentativasRestantes === 0) {
        dica.textContent = `💀 Você perdeu! O número era ${numeroSecreto}`;
        encerrarJogo();
    } else if (chute < numeroSecreto) {
        dica.textContent = "🔼 Tente um número MAIOR!";
    } else {
        dica.textContent = "🔽 O número é MENOR!";
    }

    tentativasTexto.textContent = `❤️ Vidas restantes: ${tentativasRestantes}`;
    
    // Limpa o input
    input.value = "";
});

// Função para encerrar o jogo
    function encerrarJogo() {
        input.disabled = true;
        botao.disabled = true;
        botaoReiniciar.style.display = "block";
    }

// Função para reiniciar o jogo
    function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
    numerosChutados = [];

    input.disabled = false;
    botao.disabled = false;

    input.value = "";
    dica.textContent = "Dica:";
    listaChutes.textContent = "Números que você já chutou:";
    tentativasTexto.textContent = `❤️ Vidas restantes: ${tentativasRestantes}`;

    botaoReiniciar.style.display = "none";
    }

// Evento do botão para reiniciar
    botaoReiniciar.addEventListener("click", reiniciarJogo);

