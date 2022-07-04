// El proyecto es un test de sombrero seleccionador de Harry Potter
const casas = {
  gryffindor: 0,
  slytherin: 0,
  hufflepuff: 0,
  ravenclaw: 0,
};
// Lo que hice acá fue crear un botón de registro, en donde tocas "Quiero registrarme"
// y se ejecuta la función registro que está más abajo.
const boton1 = document.createElement("button");
boton1.innerText = "Quiero registrarme";
boton1.style = "width: 200px; height: 50px; margin-right:10px;";
document.body.append(boton1);
boton1.addEventListener("click", registro);
class Usuario {
  // Acá modifiqué el objeto por la clase, como me sugeriste. Me parece una buena idea a futuro,
  // aunque por ahora solo permita el ingreso de un usuario
  constructor(nombre, usuario, edad, pais) {
    this.nombre = prompt("Ingrese su nombre");
    this.usuario = prompt("Ingrese un nombre de usuario");
    this.edad = prompt("Ingrese su edad");
    this.pais = prompt("Ingrese su país de origen");
  }
  cambiarUsuario() {
    this.usuario = prompt("Ingrese nuevo nombre de usuario");
  }
}
let usuario1; // Acá declaré primero esta función afuera para poder usar sus datos luego.
function registro() {
  usuario1 = new Usuario();

  const divUs = document.createElement("div"); //Acá cree un div para que los datos del usuario aparezcan en pantalla

  divUs.innerHTML = `<h3>Sus datos son: 
    Nombre: ${usuario1.nombre} 
    Nombre de usuario: ${usuario1.usuario} 
    Edad: ${usuario1.edad} 
    País: ${usuario1.pais} 
  <h3>`;
  document.body.append(divUs);
}
// Este es el botón que va a ejecutar el test
const boton2 = document.createElement("button");
boton2.innerText = "Quiero comenzar el test";
boton2.style.width = "200px";
boton2.style.height = "50px";

document.body.append(boton2);

boton2.addEventListener("click", test);

function test() {
  let ingreso = prompt(
    "Saludos " +
      usuario1.usuario +
      ", ¿Quiere tomar el test de selección de casas?"
  );
  ingreso = ingreso.toLowerCase();

  if (ingreso === "si") {
    alert("Muy bien, prosigamos");
    test();
  } else {
    // Toda respuesta que no sea "si" o "cambiar" va a obtener este mensaje y no se va a ejecutar el test.
    alert("Hasta luego entonces, muggle");
  }
  function test() {
    const preguntas = [
      "¿Qué elemento prefiere: agua, fuego, aire, tierra?",
      "¿Cómo le gustaría ser recordado en la historia, 1. El sabio, 2. El bueno, 3. El grande, 4. El audaz?",
      "¿Qué le resulta más difícil soportar, el aburrimiento, el hambre, la soledad, o el ser ignorado?",
    ];
    const respuestas = [];

    for (let i = 0; i < preguntas.length; i++) {
      respuestas.push(prompt(preguntas[i]));
    }
    // Me parece que el switch funciona bien, mejor que un IF como vos me dijiste.
    // Siento que con un IF va a quedar mas desordenado
    switch (respuestas[0].toLowerCase()) {
      case "agua":
        casas.ravenclaw += 5;
        break;
      case "fuego":
        casas.gryffindor += 5;
        break;
      case "aire":
        casas.slytherin += 5;
        break;
      case "tierra":
        casas.hufflepuff += 5;
        break;
      default:
        alert("Si no va a ingresar un element válido, avada kedavra!!!!!");
    }
    switch (respuestas[1]) {
      case "1":
        casas.ravenclaw += 6;
        break;
      case "2":
        casas.hufflepuff += 6;
        break;
      case "3":
        casas.slytherin += 6;
        break;
      case "4":
        casas.gryffindor += 6;
        break;
      default:
        alert("Si no va a ingresar un element válido, avada kedavra!!!!!");
    }

    switch (respuestas[2].toLowerCase()) {
      case "el aburrimiento":
      case "aburrimiento":
        casas.gryffindor += 5;
        break;
      case "el hambre":
      case "hambre":
        casas.ravenclaw += 5;
        break;
      case "la soledad":
      case "soledad":
        casas.hufflepuff += 5;
        break;
      case "ser ignorado":
      case "ignorado":
        casas.slytherin += 5;
        break;
      default:
        alert("Si no va a ingresar un element válido, avada kedavra!!!!!");
    }
  }

  let casaElegida = 0;
  let nombreCasa = "";

  if (casas.gryffindor > casaElegida) {
    casaElegida = casas.gryffindor;
    nombreCasa = "Gryffindor";
  }

  if (casas.ravenclaw > casaElegida) {
    casaElegida = casas.ravenclaw;
    nombreCasa = "Ravenclaw";
  }

  if (casas.hufflepuff > casaElegida) {
    casaElegida = casas.hufflepuff;
    nombreCasa = "Hufflepuff";
  }

  if (casas.slytherin > casaElegida) {
    casaElegida = casas.slytherin;
    nombreCasa = "Slytherin";
  }

  let pregunta = prompt(
    "Ya tengo todo lo que necesito, ¿quiere conocer su casa?"
  );
  if (pregunta.toLowerCase() === "no") {
    alert("Hasta luego");
  } else if (pregunta.toLowerCase() === "si") {
    const casaSelecc = document.createElement("div");
    casaSelecc.innerHTML = `<h1>Su casa es ${nombreCasa}<h1>`;

    document.body.append(casaSelecc);
  }
}
