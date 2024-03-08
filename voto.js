const idade = 17;

if (idade >= 18) {
    console.log("voto Obrigatorio")
} else if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo")
} else if (idade < 16) {
    console.log("Não pode votar")
}