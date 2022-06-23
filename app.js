//Múltiplos

//Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

const numero = prompt("Por favor ingresa un número");
const numero2 = prompt("Por favor ingresa otro número");
alert(`¿El primer número es múltiplo del del segundo número?: ${numero % numero2 === 0}`)