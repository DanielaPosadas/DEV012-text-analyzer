<h1 text-align:center>Analizador de texto<h1>

## Índice

* [Resumen](#Resumen)
* [Introducción](#Introducción)
* [Prototipado](#Prototipado)
* [Funcionalidades del proyecto](#Funcionalidades-del-proyecto)
* [Criterios de aceptación mínimos](#Criterios-de-aceptación-mínimos)
* [Pruebas](#Pruebas)
* [Desarrolladores del proyecto](#Desarrolladores-del-proyecto)

## Resumen

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos.

## Introducción

![Vista del Analizador de texto desde un navegador web](https://github.com/DanielaPosadas/DEV012-text-analyzer/blob/main/AnalizadorCaptura.png)

_Vista del Analizador de texto desde un navegador web_

Este proyecto implementa tres lenguajes diferentes para darle estilo y funcionalidad a una aplicación web que analiza textos a través del navegador.

El Analizador de texto es intuitivo y fácil de utilizar mostrando seis métricas que analizan y devuelven el valor ingresado en el cuadro de texto ubicado al centro. Cuenta con un botón debajo que permite limpiar el texto y las métricas facilitando el ingreso de texto nuevo.

## Prototipado

![Bocetos comprensivos iniciales del Analizador de texto](https://github.com/DanielaPosadas/DEV012-text-analyzer/blob/main/BocetosTextAnalyzer.jpeg)

_Bocetos comprensivos iniciales del Analizador de texto_

El proyecto fue estructurado a través de un boceto comprensivo que establece una composición muy simple que facilita al usuario entender la funcionalidad del mismo.

Se crearon dos bocetos más que comparten similitudes entre ellos y que permitieron obtener el resultado final considerado como el más viable para desarrollar una aplicación clara para cualquier usuario que la usase.

![Maquetación de aplicación web con paleta de color](https://github.com/DanielaPosadas/DEV012-text-analyzer/blob/main/EsquemaAnalizador.jpeg)

_Maquetación de aplicación web con paleta de color_

Se tuvieron en cuenta las reglas básica del diseño visual para diseñar una UI (interfáz gráfica) agradable. La gama cromática es bastante simple, siendo conformada por tres tonos pasando de magenta a gris y finalizando en el blanco, generando un buen contraste entre una tipografía blanca y negra para el título y los botones respectivamente.

## Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación permite al usuario ingresar un texto escribiéndolo o mediante copy-paste en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualiza el resultado en tiempo real a medida que el usuaria escribe o inserta un texto:

    - **Recuento de palabras**: La aplicación cuenta el número de palabras en el texto y muestra este recuento al usuario plasmando el resultado en la métrica correspondiente.
    - **Recuento de caracteres**: La aplicación cuenta el número de caracteres en el texto, incluidos espacios y signos de puntuación, y muestra este recuento en la métrica correspondiente.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    La aplicación cuenta el número de caracteres en el texto ingresado, excluyendo espacios y signos de puntuación, y mostrando este recuento al usuario a través de la métrica.
    - **Recuento de números**: La aplicación cuenta cúantos números hay
    dentro del texto y muestra este recuento al usuario.
    - **Suma total de números**: La aplicación suma todos los números existentes dentro del texto y muestra el resultado final al usuario a través de la métrica.
    - **Longitud media de las palabras**: La aplicación calcula la longitud media de las palabras en el texto y la muestra al usuario a través de la métrica.

3. La aplicación permite limpiar el contenido de la caja de texto y las métricas haciendo clic en el botón que se encuentra en la parte inferior.

GIF DEL ANALIZADOR DE TEXTO
![Text analyzer demo](https://github.com/DanielaPosadas/DEV012-text-analyzer/blob/main/FuncionalidadesAnalizador.gif "Text analyzer demo")

## Criterior mínimos de aceptación

El proyecto debió cumplir e implementar ciertos criterios de aceptación mínimos los cuales se enlistan a continuación:

### HTML

* **Uso de HTML semántico**

  - La aplicación tiene un encabezado conformado por un
  [`<header>`] padre de un [`<h1>`] con texto `Analizador de texto`. Estos elementos no tienen atributos id, name o class.

  - La aplicación usa un [`<textarea>`] con un atributo `name` para permitir al usuario ingresar un texto. Este elemento no tiene atributos id o class.

  - La aplicación usa un [`<ul>`] con 6 hijos [`<li>`], uno para cada métrica. Estos
  elementos no tienen atributos id, name o hijos.

  - Cada uno de los [`<li>`] para mostrar _las métricas_ tiene un atributo data-testid.

  - La aplicación tiene un pie de página conformado por un
  [`<footer>`] que es padre de un [`<p>`] que tiene como texto el nombre del desarrollador web. Ninguno de estos elementos tienen atributos id, name o class.

  - La aplicación usa un `<button>` con el atributo `id` para permitir al usuario,
  mediante un clic, limpiar el contenido de la caja de texto y las métricas.

### CSS

* **Uso de selectores de CSS**

  - La aplicación usa [`selectores CSS de tipo`] para darle estilo al `<header>` y al `<footer>`.

  - La aplicación usa [`selectores CSS de class`] para darle estilo a los
  [`<li>`] descritos anteriormente.
 
  - La aplicación usa [`selectores de atributo`] para darle estilo al [`<textarea>`].

  - La aplicación usa [`selectores CSS de ID`] para darle estilo al
  [`<button>`].

* **Modelo de caja (box model)**

  -  Las clases css de los `<li>` hijos del `<ul>` definen un estilo usando las propiedades del modelo de caja: (background, border, margin y padding).

### Web APIs

* **Uso de selectores del DOM**

  - La aplicación usa el [`selector del DOM querySelector`].

  - La aplicación usa el [`selector del DOM getElementById`].

* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - La aplicación registra un Event Listener para escuchar el evento del `<textarea>` para actualizar las métricas cuando se escriba en el cuadro de texto.

  - La aplicación registra un Event Listener para escuchar el evento del `<button>` que limpia el contenido de la caja de texto y las seis métricas.

* **Manipulación dinámica del DOM**

  - La aplicación actualiza el atributo innerHTML de los `<li>` que muestra las métricas del texto en la aplicación web.

### JavaScript

* **Tipos de datos primitivos**

  - La aplicación convierte valores tipo string a tipo number.

* **Strings (cadenas de caracteres)**

  - La aplicación usa métodos para manipular strings como split y replace.

* **Variables (declaración, asignación, ámbito)**

  - La aplicación declara variables con let y const.

  - La aplicación NO declara variables con var.

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - La aplicación usa el statement if..else para evaluar condiciones.

* **Uso de bucles/ciclos (while, for, for..of)**

  - La aplicación usa el statement for para crear un bucle.

* **Funciones (params, args, return)**

  - El objeto `analyzer` contiene seis método `get...` diferentes para calcular cada una de las métricas dentro de la aplicación:

      * Recuento de palabras totales dentro del texto.
      * Caracteres totales dentro del texto.
      * Caracteres excluyendo espacios y signos de puntuación dentro del texto.
      * Números dentro del texto.
      * Suma total de los números dentro del texto.
      * Longitud media de las palabras dentro del texto.

## Pruebas**

El proyecto debió pasar por diversas pruebas unitarias para validar que todos los requisitos mínimos de aceptación fuesen cumplidos.

      "Una prueba unitaria es una técnica de prueba de software en la que se comprueba que cada componente individual de un programa o sistema funciona correctamente de manera aislada."

Las pruebas unitarias se mencionan a continuación:

### Pruebas unitarias

Las pruebas unitarias de este proyecto ejecutan los métodos `get..` correspondientes a cada métrica dentro del archivo analyzer.js con diferentes argumentos y se confirmará que los valores retornados sean los esperados. También se ejecutan guías de estilos para verificar el HTML y JavaScript.

Esta prueba de ejecutó con `npm run test` en la terminal dentro de la carpeta del proyecto.

### Pruebas de criterios mínimos de aceptación

En esta prueba se analizaron HTML, JS y CSS para verificar que se cumplió con los
criterios minimos de aceptación.

Todas estas pruebas se ejecutaron con el comando `npm run test:oas` en la terminal dentro de la carpeta del proyecto. De igual forma se ejecutaron de manera individual con cada uno de los comandos a continuación:

* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`

#### Pruebas end-to-end

Una prueba end-to-end (E2E) es una técnica de prueba de software en la que
se verifica el funcionamiento de todo el sistema desde el inicio hasta el
final. En otras palabras, se prueba el flujo completo del software, simulando
la interacción del usuario con la aplicación, para asegurarse de que todas
las partes del sistema funcionan correctamente en conjunto.

Esta prueba se ejecutó a través del comando `npm run test:e2e`.

## Desarrolladores del proyecto

| [<img src="https://avatars.githubusercontent.com/u/144648301?v=4" width=115px><br><sub>Daniela Posadas<sub>](https://github.com/DanielaPosadas)
| :---: |