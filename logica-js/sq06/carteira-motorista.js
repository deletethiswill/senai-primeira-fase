const prompt = require("prompt-sync")()
const idade = prompt("Digite sua idade ")
const cnh = prompt("Possui cnh? (Sim/Nao)")
if(idade >= 18 && cnh == "Sim"){
    console.log("Pode dirigir")
} else if(idade <= 18) {
    console.log("Não possui a idade necessária para poder dirigir, e retirar a cnh")
} else if(cnh == "Nao"){
    console.log("Você não possui cnh, é preciso sair com documento de identificação para ser condutor")
} else{
    console.log("Você pode dirigir, bom passeio!")
}


