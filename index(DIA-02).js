/*
operador aritmetico
    somando + 1 ao valor
let num1 = 5
let num2 = 6
let total = num1 * num2

console.log(total++)

console.log(total)
*/

/*
operador de comparação

let n1 = 3
let n2 = 3

//se é maior ou menor
console.log(n1 + n2 <= 5)

// se é igual ao valor da variável
console.log(n1 === 5)

// caso o valor não seja igual a
console.log(n1 !== 3)
*/

/*
OPERADORES TERNARIOS


let drive = 90
let speed = drive > 110 ? 'acima' : 'abaixo'
console.log(speed)
*/

/*
OPERADORES LÓGICOS
    AND=&&
    OR=!!
    NOT=!
*/

let pessoa = {
    name1: "Jonas",
    temIdadeMinima: true,
    temTitulo: true
} 

let podeVotar = pessoa.temIdadeMinima && pessoa.temTitulo;

if (podeVotar === true) {
    // let conteudo = 'me parece que ele pode votar de fato';
    let conteudo = pessoa.name1 + ' pode votar, de fato';
    console.log(conteudo)
}


