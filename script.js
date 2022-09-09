let numeroSecreto = parseInt(Math.random() * 11);


const tentativas = 5

//o math.radom "sorteia" um número aleatório. Está multriplicado por 11 nossos números vão até 10




function Chutar() {
    let chute = parseInt(document.getElementById('valor').value); //transformando para número inteiro

    let resultado = document.getElementById('resultado')

    if (chute == numeroSecreto) {
        resultado.innerHTML = "Parabéns! Você acertou! <a href='https://emojitool.com/pt/crystal-ball'>🔮</a>"

    } else if (chute < 0 | chute > 10) {
        resultado.innerHTML = "Você deve digitar um número entre 0 e 10. <br><br><br><a href='https://emojitool.com/pt/face-with-rolling-eyes'>🙄</a>";
    } else {
        resultado.innerHTML = "Você Errou!";
    }


}

//inserir função contar cliques
// Determinar quantidade de tentativas