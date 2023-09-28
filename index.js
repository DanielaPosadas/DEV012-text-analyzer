import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const palabras= document.getElementsByClassName("contadores")[0];
const caracteres= document.getElementsByClassName("contadores")[1];
const caracteresSE= document.getElementsByClassName("contadores")[2];
const numeros= document.getElementsByClassName("contadores")[3];
const sumaN= document.getElementsByClassName("contadores")[4];
const longitud= document.getElementsByClassName("contadores")[5];
const texto = document.querySelector("textarea");

texto.addEventListener("input" , metricas)
function metricas(){
  const textoA = texto.value

  //Contabilizar palabras
  const Cpalabras = analyzer.getWordCount(textoA);
  palabras.innerHTML = "Palabras: " + Cpalabras;

  //Contabilizar caracteres
  const Ccaracteres = analyzer.getCharacterCount(textoA);
  caracteres.innerHTML = "Caracteres: " + Ccaracteres;

  //Contabilizar caracteres sin espacios
  const CcaracteresSE = analyzer.getCharacterCountExcludingSpaces(textoA);
  caracteresSE.innerHTML = "Caracteres sin espacios: " + CcaracteresSE;

  //Contabilizar números
  const Cnumeros = analyzer.getNumberCount(textoA);
  numeros.innerHTML = "Numeros: " + Cnumeros;
    
  //Sumar números
  const Snumeros = analyzer.getNumberSum(textoA);
  sumaN.innerHTML = "Suma de números: " + Snumeros;

  //Longitud de palabras
  const Rlongitud = analyzer.getAverageWordLength(textoA);
  longitud.innerHTML = "Longitud palabras: " + Rlongitud;
}

//Botón de limpiar contenido
const boton = document.getElementById("reset-button");
boton.addEventListener("click",function (){
  document.querySelector("textarea").value= "";
  palabras.innerHTML = "Palabras: 0"
  caracteres.innerHTML = "Caracteres: 0"
  caracteresSE.innerHTML = "Caracteres sin espacios: 0";
  numeros.innerHTML = "Numeros: 0";
  sumaN.innerHTML = "Suma de números: 0";
  longitud.innerHTML = "Longitud palabras: 0.0";
})