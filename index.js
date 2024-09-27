console.log('print, man');
/*
licao sobre variáveis:
    - não utilize número para iniciar variáveis
    - que os nomes de variáveis sejam únicas
    - utlizar o let ao invés do var para definir variáveis

let name_i = 'Natan';
console.log(name_i);
*/

/*
Constant:
    - utilizada para não modificar o valor da variável; 
    - deixa-la permanente com o seu valor 

const price = 30;
// price = 20;
console.log(price);
*/

/* 
tipos primitivos
    - tipos de variaveis no javascript 
    - javascript é uma linguagem dinâmica, não precisando definir
    o tipos de maneira antecipada= "let string itemName", por exemplo

Objeto:
    armazenando variávei em um unico objeto
        utilize o LET e abra e feche parênteses
    

let itemName = 'Pen';
let itemPrice = 3;
let itemAvaliable = true;
let itemColor = 'Red';

let penBic = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvaliable: true,

}

penBic.itemColor = "green"
console.log(penBic);
*/
/*
Arrays
    - armazena da mesma maneira que no python
    - a mudança do valor consta


let zeppelin = ['page', 'plant', 'bonham', 'Paul']
zeppelin[3] = 'John Paul Jones'

console.log(zeppelin[3])
*/


/*
Função
    - somente passando o status
    - função de calculo
*/
function saletatus(status, total) {
    console.log('\naproved = ' + status + " \ntotal amount = " + total)
}

// saletatus('yes, Approved', 55)

function percentage10(price) {
    return price - (price * 10 / 100)
}

console.log(percentage10(20))