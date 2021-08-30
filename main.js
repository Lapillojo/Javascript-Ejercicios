//Ejercicio de colores y número de la suerte

let numero = Math.floor(Math.random()*11);
let color = prompt("¿Cuál es tu color favorito?");
alert("Tu color favorito es " + color+ " Y tu número de la suerte es " + numero); 

//Ejercicio de "Leer tu mente"
alert("Hola, mi nombre es Fiorella y hoy seré tu asistente");
alert("Gracias al poder de Javascript podré leer tu mente y saber tu número de la suerte");
let nombre = prompt("¿Cuál es tu nombre?");
let color = prompt("¿Cuál es tu color favorito?");
let pregunta = prompt("¿Te gusta tu vida?");
alert("Ooohh, veo que tu nombre es " + nombre + " y tu color favorito es " + color + " y, al parecer, " + pregunta + " te gusta tu vida?");
alert("Qué interesante tu respuesta")
alert("Necesito unos segundos para procesarlo")
alert("PROCESANDO ...")
alert("Hora de decirte tu número de la suerte :)")
let numero = Math.round(Math.random()*11);
alert("Tu número de la suerte es " + numero);

//Ejercicio de CONDICIONALES (If y else)
//A
let x = 10; 
if (x > 5){
    x++;
    console.log(x);
} else{
    alert("Error...")
} 
//B
let edad = 14;
if (edad > 5 && edad < 10 ){
    alert("Mira Peppa Pig");
} else if ( edad > 10 && edad < 15){
    alert("Mira Pokemon");
} else {
    alert("Error...")
} 
// DO y WHILE 
let i = 0;
do {
    i++;
    alert(i);
} while (i < 10);
 // Ejercicio de CONDICIONALES (do y while)
 alert("Hola");
 let numero = prompt("Escoge un número del 0 al 20");
 let i = Numero(numero);

 do {
    i++;
    alert(i);
} while (i < 20);

alert(numero + "no está definido");

//EJERCICIOS DE FUNCIONES
//Área de cuadrado.
function areaCuadrado(num1, num2){
    var respuesta = num1 * num2;
    alert(respuesta);
} 
areaCuadrado(4,5);

//  Porcentaje de compatibilidad.
let nombre = prompt("Escribe el nombre de tu novix y sabrás cuánta compatibilidad tienen como paeja.")
function compatibilidad(){
    generador = Math.round(Math.random()* 101) +"%";
    alert(generador);
} compatibilidad();



