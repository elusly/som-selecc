// El proyecto es un test de sombrero seleccionador de Harry Potter
let gryffindor = 0;
let slytherin = 0;
let hufflepuff = 0;
let ravenclaw = 0;
const boton1 = document.createElement("botton");
boton1.innerHTML = `<div><button id="registro" style="width: 200px; height: 50px">
<h3>Quiero registrarme</h3>
</button><div>`;
document.body.append(boton1);
boton1.addEventListener("click", registro);
function registro() {
  class usuario {
    // Acá modifiqué el objeto por la clase, como me sugeriste. Me parece una buena idea a futuro, aunque por ahora solo permita el ingreso de un usuario
    constructor(nombre, usuario, edad, pais) {
      this.nombre = prompt("Ingrese su nombre");
      this.usuario = prompt("Ingrese un nombre de usuario");
      this.edad = prompt("Ingrese su edad");
      this.pais = prompt("Ingrese su país de origen");
    }
    cambiarusuario() {
      let nuevousuario = prompt("Ingrese nuevo nombre de usuario");
      this.usuario = nuevousuario;
    }
  }
  const usuario1 = new usuario();
  const divUs = document.createElement("div");
  divUs.innerHTML = `<h3>Sus datos son: 
  Nombre: ${usuario1.nombre} 
  Nombre de usuario: ${usuario1.usuario} 
  Edad: ${usuario1.edad} 
  País: ${usuario1.pais} 
  <h3>`;
  document.body.append(divUs);
}

const boton2 = document.createElement("botton");
boton2.innerHTML = `<div><button id="test" style="width: 200px; height: 50px">
<h3>Quiero comenzar el test</h3>
</button><div>`;
document.body.append(boton2);
boton2.addEventListener("click", test);
// function runTest() {
//   let ingreso = prompt(
//     "Saludos " +
//       usuario1.usuario +
//       ", ¿Quiere tomar el test de selección de casas? Si desea cambiar su usuario escriba CAMBIAR"
//   );
//   ingreso = ingreso.toLowerCase();

//   if (ingreso === "si") {
//     alert("Muy bien, prosigamos");
//     test();
//   } else if (ingreso === "cambiar") {
//     usuario1.cambiarusuario();
//     alert("Muy bien " + usuario1.usuario + ", comencemos");
//     test();
//   } else {
//     // Toda respuesta que no sea "si" o "cambiar" va a obtener este mensaje y no se va a ejecutar el test.
//     alert("Hasta luego entonces, muggle");
//   }

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
  switch (
    respuestas[0].toLowerCase() // Me parece que el switch funciona bien, mejor que un IF como vos me dijiste. Siento que con un IF va a quedar mas desordenado
  ) {
    case "agua":
      ravenclaw += 5;
      break;
    case "fuego":
      gryffindor += 5;
      break;
    case "aire":
      slytherin += 5;
      break;
    case "tierra":
      hufflepuff += 5;
      break;
    default:
      alert("Si no va a ingresar un element válido, avada kedavra!!!!!");
  }
  switch (respuestas[1]) {
    case "1":
      ravenclaw += 6;
      break;
    case "2":
      hufflepuff += 6;
      break;
    case "3":
      slytherin += 6;
      break;
    case "4":
      gryffindor += 6;
      break;
    default:
      alert("Si no va a ingresar un element válido, avada kedavra!!!!!");
  }

  switch (respuestas[2].toLowerCase()) {
    case "el aburrimiento":
    case "aburrimiento":
      gryffindor += 5;
      break;
    case "el hambre":
    case "hambre":
      ravenclaw += 5;
      break;
    case "la soledad":
    case "soledad":
      hufflepuff += 5;
      break;
    case "ser ignorado":
    case "ignorado":
      slytherin += 5;
      break;
    default:
      alert("Si no va a ingresar un element válido, avada kedavra!!!!!");
  }
  let casaElegida = 0;
  let nombreCasa = "";
  if (gryffindor > casaElegida) {
    casaElegida = gryffindor;
    nombreCasa = "Gryffindor";
  }
  if (ravenclaw > casaElegida) {
    casaElegida = ravenclaw;
    nombreCasa = "Ravenclaw";
  }
  if (hufflepuff > casaElegida) {
    casaElegida = hufflepuff;
    nombreCasa = "Hufflepuff";
  }
  if (slytherin > casaElegida) {
    casaElegida = slytherin;
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
  // const casaSelecc = document.createElement("div");
  // casaSelecc.innerHTML = `<h1>Su casa es ${nombreCasa}<h1>`;
  // document.body.append(casaSelecc);
}
// }
