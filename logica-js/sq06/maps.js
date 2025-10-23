const numeros = [3,5,8,10]

const usuarios = [
    {nome: "Joao", idade: 32},
    {nome: "Maria", idade: 15},
    {nome: "Pedro", idade: 21}
]

const nomesUsuarios = usuarios.map((usuario) => usuario.nome)
console.log(nomesUsuarios)

const idadeUsuarios = usuarios.map((usuario) => usuario.idade)
console.log(idadeUsuarios)
for (let idade of idadeUsuarios)
    console.log(idade)