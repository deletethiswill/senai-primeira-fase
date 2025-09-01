programa {
  funcao inicio() {
    real salario, salario_diario
    inteiro dias
    escreva("Digite seu salário R$:")
    leia(salario)
    escreva ("Digite o número de dias que você trabalhou: ")
    leia (dias)
    salario_diario = salario / dias
    escreva ("Seu salário diário deu: " + salario_diario)
  }
}
