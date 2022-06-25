//Múltiplos

//Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

const numero = prompt("Por favor ingresa un número");
const numero2 = prompt("Por favor ingresa otro número");

alert(`¿El valor ${numero} es múltiplo de ${numero2}?: ${numero % numero2 === 0}`)

//alert("¿El valor " + numero + " es multiplo de " + numero2 + "?: " + (numero % numero2 === 0))