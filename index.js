/*En este ejercicio, deberás escribir una nueva versión de FizzBuzz (fizzBuzz2) que tome dos Strings 
como Argumento y reimplemente el FizzBuzz original. Elegí una palabra para cada String (palabra1 y palabra2)
 que reemplace a Fizz y a Buzz.

¿Cuáles Eran las Instrucciones de Fizzbuzz?
En ese ejercicio escribiste un programa que imprimía en la consola los números del 1 al 100, teniendo en
 cuenta estos criterios:

Si el número era múltiplo de 3, imprimía "Fizz" en vez del número.
Si era múltiplo de 5, imprimía "Buzz".
Si era, a la vez, múltiplo de 3 y de 5, imprimía "FizzBuzz".
Para completar este ejercicio, deberás:

Lograr que fizzBuzz2 devuelva un String con los números separados por comas.
Mejorar la Función para que el usuario pueda decidir hasta qué número tiene que contar fizzBuzz2.
Mejorar la Función para que el usuario pueda ingresar fizz_num y buzz_num para que la sustitución de 
palabras ocurra en los números múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).*/

function FizzBuzz2 (palabra1, palabra2) {
  alert("Bienvenido al nuevo juego FizzBuzz II");

let final = parseInt(prompt("Hasta que numero desea contar: "));
let fizz_num=parseInt(prompt("Ingrese un  múltiplo: "));
let buzz_num=parseInt(prompt("Ingrese otro  múltiplo distinto al primero: "));



  for (let i= 1; i<=final; i ++){
    if (i % fizz_num == 0 && i % buzz_num == 0){
      console.log(`${i}`, `${palabra1}`,`${palabra2}`);
      } else if (i % fizz_num == 0) { 
        console.log(`${i}`, `${palabra1}`);
      } else if (i % buzz_num ==0){
        console.log(`${i}`, `${palabra2}`);
      } else { console.log(`${i}`)}
       i++
       
    }
    alert("Gracias por jugar!!!!!!!!!!!!!!!");
}
FizzBuzz2("fizz","Buzz2");