const analyzer = { 
  getWordCount: (textoA) => { 
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const cuentapalabras = textoA.replace(/[0-9]/g, '').replace(/[.''"«».,#¡!$%&;:{}=\-_`~(|)¿?[°/]/g, '').split(" ");
    const text = cuentapalabras.filter(word => word !=='').length;
    return(text);
  },
  getCharacterCount: (textoA) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const cuentacaracteres = textoA.replace(/[0-9]/g, '').replace(/[']/g, '');
    const text = cuentacaracteres.length;
    return(text);
  },
  getCharacterCountExcludingSpaces: (textoA) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresSE = textoA.replace(/\s+/g, '').replace(/([.''"«»,?#¡!$%&;:{}=\-_`~(|)'¿[°/])/g, '').replace(/[0-9]/g, '');
    const text = caracteresSE.length;
    return(text);
  },
  getAverageWordLength: (textoA) => { 
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const texto = textoA.replace(/(['"/])/g, '');
    const palabras = texto.split(' ');
    const palabrasCom = palabras.filter(word => word !=='');
    let longitudTotalC = 0;
    let longitudTotalP = 0;
    for (let i = 0; i < palabrasCom.length; i++){
      longitudTotalC += palabrasCom[i].length;
    }
    longitudTotalP = palabrasCom.length
    
    const longitudMedia = longitudTotalC/longitudTotalP; //Dividir el número total de caracteres entre el número total de palabras
    
    const text = Number(longitudMedia.toFixed(2));
    return (text);
  },
  getNumberCount: (textoA) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const Cnumeros = textoA.match(/\d+(\.\d+)?(?!\w)/g) || []; //(?!\w) = evita que coincida con números seguidos de letras.
    const text = Cnumeros.length;           
    return(text);
  },
  getNumberSum: (textoA) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const valor = textoA.match(/\d+(\.\d+)?(?!\w)/g);
    let resultadosum = 0; //Aquí se van a ir acumulando los numeros que el array va encontrando dentro del texto
    if (valor){ //Si dentro del texto "valor" hay números, esto pasará
      for (let i= 0; i < valor.length; i++){ //i es la posición que se recorre en el array [0,1,2] [10(posición 0),20,30]
        resultadosum += parseFloat(valor[i]);
      }
    }
    const text = resultadosum; 
    return(text); }
};


export default analyzer;