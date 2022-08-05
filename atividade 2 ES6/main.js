const usuario = {
    nome: 'Aluno',
    idade: 999,
    endereco: {
        rua: 'jaquitiba',
        cidade: 'ariragua',
    }
}

const {nome, idade, endereco:{cidade}} = usuario;

//-----------------------------Funções--------------------------------

//---named function---
function printInfo (info){
    console.log([nome, idade, cidade]);
} 

//---anonymous funtion
const printInfo1 = function(info){
    console.log([nome, idade, cidade]);
} 

//---anonymous arrow funtion
const printInfo2 = (info) => {
    console.log([nome, idade, cidade]);
} 

const namedF = document.getElementById('namedF');
const anonF = document.getElementById('anonF');
const arrowF = document.getElementById('arrowF');

namedF.addEventListener('click', () => {printInfo(usuario)});
anonF.addEventListener('click', () => {printInfo1(usuario)});
arrowF.addEventListener('click', () => {printInfo2(usuario)});



//-----------------------------Desestruturação--------------------------------
const array1 = [1,2,3,4];

//cria uma cópia do primeiro array de forma independente,
//que quando alterado não afeta o original
const array2 = [...array1]; 

function soma(arr){
    console.log(arr.reduce((total, next) => {
        return total+next;
    }));
}

soma(array1);

const usuario2 = {
    nome: 'Fulano',
    idade: '123123',
    empresa: 'Petyan',
}

console.log(usuario2);
//Altera apenas a propriedade desejada ao desestruturar o objeto
console.log({...usuario2, nome: 'Ciclano'});

//---------------Simplificando propriedade em objetos-----------
const fruta = 'maçã';
const cor = 'vermelha';

const feira = {
    fruta,
    cor,
}

console.log(feira);
//Como a propriedade no objeto possui o mesmo nome da variável a ser utilizada
//é possível simplificar dessa maneira.