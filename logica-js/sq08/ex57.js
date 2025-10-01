let dias
let valorDiaria
let totalBruto, totalLiquido
let desconto10, desconto15, multa

dias = Number(prompt("Digite quantos dias:"))
if (dias <= 5){
    valorDiaria = 100
} else if (dias <= 10){
    valorDiaria = 90
}else{
    valorDiaria = 80
    }

    totalBruto = dias * valorDiaria
    console.log(totalbruto);

    desconto10 = totalbruto * 10/100
    desconto15 = totalbruto * 15/100

    totalLiquido = totalBruto - (desconto10 + desconto15) + multa

    alert(`Número de dias ${dias}, 
        valor por diária ${valorDiaria},
        total bruto ${totalBruto},
        desconto especial ${desconto10}
        desconto convênio ${desconto15},
        total a pagar ${totalLiquido} `)
       
