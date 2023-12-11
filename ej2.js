//Ejercicio 2:
//Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

let numero = prompt("ingresa un numero");

if (isNaN(numero)){
    prompt("ingresa numero valido")
}

let numeroYpares = (numero) =>{
    let a = 50
    return numero += a
}     
for(let i = numero; i <= a ; i++){
    if( i % 2 !== 0){
        return i
    }
}

numeroYpares
console.log(numeroYpares(3))
