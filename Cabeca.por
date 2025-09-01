programa {
  funcao inicio() {
real cafe, cafe_per_capita, coxinha
inteiro alunos
escreva("Quantos litros de cafe? ")
leia(cafe)
escreva("Quantas coxinhas? ")
leia(coxinha)
escreva("Quantos alunos tem hoje? ")
leia(alunos)
cafe_per_capita = cafe / alunos
escreva("Quantidade de cafe por cabeça: " + cafe_per_capita + " litros")
coxinha = coxinha / alunos
escreva(" Quantidade de extracoxinha por cabeça: " + coxinha )
  }
}
