const prompt = require("prompt-sync")()
const frequencia = prompt("Digite sua frequência: ")
const notaFinal = prompt("Digite sua nota : ")

if(notaFinal >= 7 && frequencia >= 8){
    console.log("Aprovado")
} else {
    console.log("Reprovado")}
