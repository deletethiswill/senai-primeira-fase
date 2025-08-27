programa {
  
  funcao logico senhaValida(cadeia senha){
  se(senha == "Will Gostoso"){
    retorne verdadeiro
  } senao {
    retorne falso
  }
  }
  
  
  
  funcao inicio() {
    cadeia senha
    escreva("Digite a senha:")
    leia(senha)

    se(senhaValida(senha)){
      escreva("Acesso Permitido")
    } senao {
      escreva("Senha Inválida")
    }
  }
}
