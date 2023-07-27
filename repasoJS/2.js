//2

document.write(`ARI y CELE, 17`)
document.write('<br>');

// 3

const edad = "17"
const nombre = "cele y ari"
document.write('<br>');
document.write(` ${nombre}`)
document.write('<br>');
document.write(` ${edad}`)
document.write('<br>');
// 4

let nombre1;
let mail;

nombre1 = prompt ("Ingrese su nombre");
mail = prompt ("Ingrese su mail: ");
document.write('<br>');
document.write("Este es su nombre: ", nombre1);
document.write('<br>');
document.write("Este es su mail: ", mail);
document.write('<br>');

//5 //1

let lado1
let lado2
let lado3
let lado4
document.write('<br>');
lado1 = prompt ("Ingrese lado1");

lado2 = prompt ("Ingrese lado2");

lado3 = prompt ("Ingrese lado3");

lado4 = prompt ("Ingrese lado4");

let resultado

resultado = lado1 * lado2 * lado3 * lado4
document.write(`RESULTADO ES: ${resultado} `)
document.write('<br>');
document.write('<br>');
//5 //2
document.write('<br>');
let num1
let num2
let num3
let num4
num1 = parseInt(prompt ("Ingrese num1"));

num2 = parseInt(prompt ("Ingrese num2"));

num3 = parseInt(prompt ("Ingrese num3"));

num4 = parseInt(prompt ("Ingrese num4"));

let resultado1
let resultado2
document.write('<br>');
resultado1 = num1 + num2 
document.write(`Resultado de la suma es: ${resultado1} `)
document.write('<br>');
resultado2 = num4 * num3 
document.write(`Resultado de la multiplicacon es: ${resultado2} `)
document.write('<br>');

//5 //3
let numer1
let numer2
let numer3
let numer4

numer1 = parseInt(prompt ("Ingrese numer1"));
numer2 = parseInt(prompt ("Ingrese numer2"));
numer3 = parseInt(prompt ("Ingrese numer3"));
numer4 = parseInt(prompt ("Ingrese numer4"));

let suma 
let producto

suma = numer1 + numer2 + numer3 + numer4
producto = numer1 * numer2 * numer3 * numer4

document.write(`Resultado de la suma es: ${suma} `)
document.write('<br>');
document.write(`Resultado del producto es: ${producto} `)
document.write('<br>');

//5 //4

let cantidad
let abono
let precio
document.write('<br>');
document.write('<br>');

precio = parseInt(prompt ("Ingrese el precio del art"));
cantidad = parseInt(prompt ("Ingrese la cantidad"));

abono = cantidad * precio

document.write(`Tiene que abonar ${abono}`);
document.write('<br>');


//6 //1

let nota1
let nota2
let nota3
let promedio
let suma1 
document.write('<br>');

nota1 = parseInt(prompt ("Ingrese nota1"));
nota2 = parseInt(prompt ("Ingrese nota2"));
nota3 = parseInt(prompt ("Ingrese nota3"));

suma1 = nota1 + nota2 + nota3; 
promedio = suma1/3;

if (promedio > 7)
document.write(`PROMOCIONASTE`);
document.write('<br>');

//6 //2

let clave1
let clave2

clave1 = prompt ("Ingrese la clave");
clave2 = prompt ("Ingrese otra vez la clave");
if (clave1 == clave2)
document.write(`ES CORRECTA`);
document.write('<br>');