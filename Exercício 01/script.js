let numberOne = prompt("Digite o primeiro numero")
let numberTwo = prompt("Digite o segundo numero")

function math(number1,number2){

  alert(`${number1} + ${number2} = ${number1 + number2}`)
  alert(`${number1} - ${number2} = ${number1 - number2}`)
  alert(`${number1} x ${number2} = ${number1 * number2}`)
  alert(`${number1} / ${number2} = ${number1 / number2}`)

  let rest = (number1 / number2)%2
  
  alert(`Resto da divisão de (${number1} / ${number2}) = ${rest}`)

  if(rest == 1) {
    alert(`A soma de ${number1} e ${number2}, resultou em um numero par igual a ${number1 + number2} `)
  } else {
    alert(`A soma de ${number1} e ${number2}, resultou em um numero impar igual a ${number1 + number2} `)
  }

  if (number1 == number2) {
    alert(`Os dois numeros são iguais a ${number1}`)
  } else {
    alert(`Os dois numeros são diferentes entre si, ${number1} e ${number2}`)
  }
}

math(Number(numberOne), Number(numberTwo))