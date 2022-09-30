//Múltiplos

//Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

const numero = prompt("Por favor ingresa un número");
const numeroDos = prompt("Por favor ingresa otro número");

alert(`¿El valor ${numero} es múltiplo de ${numeroDos}?: ${numero % numeroDos === 0}`);

//alert("¿El valor " + numero + " es múltiplo de " + numeroDos + "?: " + (numero % numeroDos === 0))