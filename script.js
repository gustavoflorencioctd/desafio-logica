function cadastrarHeroi() {
    let nome = document.getElementById('nome').value;
    let experienciaInput = document.getElementById('experiencia').value;
    let experiencia = parseInt(experienciaInput);

    if (Number.isInteger(experiencia)) {
        main(nome, experiencia);
    } else {
        alert('A experiência deve ser um número inteiro válido.');
        experienciaInput.value = '';
    }
}

function determinarExperiencia(experiencia) {
    if (experiencia < 1000) {
        return "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        return "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        return "Prata";
    } else if (experiencia >= 6001 && experiencia <= 7000) {
        return "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        return "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        return "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function main(nomeDoHeroi, experiencia) {
    let nivel = determinarExperiencia(experiencia);

    alert(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);
}
