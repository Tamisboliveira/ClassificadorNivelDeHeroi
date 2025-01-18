//Variavel
let herosName = "Fulano"
let xpHero = 1500
let heroLevel

//condicoes
if (xpHero <= 1000){
    heroLevel = "Ferro"
}
else if (xpHero <= 2000){
    heroLevel = "Bronze"
}
else if (xpHero <= 5000){
    heroLevel = "Prata"
}
else if (xpHero <= 7000) {
    heroLevel = "Ouro"
}
else if (xpHero <= 8000) {
    heroLevel = "Platina"
}
else if (xpHero <= 9000) {
    heroLevel = "Ascendente"
}
else if (xpHero <= 10000) {
    heroLevel = "Imortal"
}
else {
    heroLevel = "Radiante"
}

//mensagem de saída
console.log("O Herói de nome "+herosName+" está no nível "+heroLevel+" com o total de "+xpHero+"XP")