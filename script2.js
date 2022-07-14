// El proyecto es un test de sombrero seleccionador de Harry Potter
const casas = {
  gryffindor: 0,
  slytherin: 0,
  hufflepuff: 0,
  ravenclaw: 0,
};
// Lo que hice acá fue crear un botón de registro, en donde tocas "Quiero registrarme"
// y se ejecuta la función registro que está más abajo.
const boton1 = document.getElementById("boton1");
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
  boton1.remove();
}
// Este es el botón que va a ejecutar el test
const boton2 = document.createElement("button");
boton2.innerText = "Quiero comenzar el test";
boton2.style.width = "200px";
boton2.style.height = "50px";

document.body.append(boton2);
boton2.addEventListener("click", testAparece);
function testAparece() {
  const secTest = document.getElementById("inicio__test");
  secTest.style.display = "block";
  boton2.remove();
}
// Lo que hice fue crear botones y a cada boton asignarle una función que sume puntos
// a la casa que corresponda su respuesta
const agua = document.getElementById("agua");
const fuego = document.getElementById("fuego");
const aire = document.getElementById("aire");
const tierra = document.getElementById("tierra");
const botones1 = [agua, fuego, aire, tierra];

agua.addEventListener("click", () => sumar5("ravenclaw", botones1));
fuego.addEventListener("click", () => sumar5("gryffindor", botones1));
aire.addEventListener("click", () => sumar5("slytherin", botones1));
tierra.addEventListener("click", () => sumar5("hufflepuff", botones1));

function sumar5(casa, botones) {
  casas[casa] += 5;
  console.log(casas);

  botones.forEach((boton) => (boton.disabled = true));
}

const sabio = document.getElementById("sabio");
const bueno = document.getElementById("bueno");
const grande = document.getElementById("grande");
const audaz = document.getElementById("audaz");
const botones2 = [sabio, bueno, grande, audaz];

sabio.addEventListener("click", () => sumar6("ravenclaw", botones2));
bueno.addEventListener("click", () => sumar6("hufflepuff", botones2));
grande.addEventListener("click", () => sumar6("slytherin", botones2));
audaz.addEventListener("click", () => sumar6("gryffindor", botones2));

function sumar6(casa, botones) {
  casas[casa] += 6;
  console.log(casas);

  botones.forEach((boton) => (boton.disabled = true));
}
const aburrimiento = document.getElementById("aburrimiento");
const hambre = document.getElementById("hambre");
const soledad = document.getElementById("soledad");
const ignorado = document.getElementById("ignorado");
const botones3 = [aburrimiento, hambre, soledad, ignorado];

aburrimiento.addEventListener("click", () => sumar5f("gryffindor", botones3));
hambre.addEventListener("click", () => sumar5f("ravenclaw", botones3));
soledad.addEventListener("click", () => sumar5f("hufflepuff", botones3));
ignorado.addEventListener("click", () => sumar5f("slytherin", botones3));
function sumar5f(casa, botones) {
  casas[casa] += 5;
  console.log(casas);

  botones.forEach((boton) => (boton.disabled = true));
  const ocultarTest = document.getElementById("inicio__test");
  ocultarTest.style.display = "none";
  const preguntar = document.getElementById("result");
  preguntar.style.display = "block";
}

function mostrarCasa() {
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
  return nombreCasa;
}
const si = document.getElementById("si");
si.addEventListener("click", sifunc);
function sifunc() {
  const casaNombre = document.createElement("h2");
  casaNombre.innerHTML = `Su casa es <span id="colorCasa">${mostrarCasa()}</span>`;
  document.body.append(casaNombre);
  si.remove();
  no.remove();
  const colorC = document.getElementById("colorCasa");
  if (mostrarCasa() === "Ravenclaw") {
    colorC.style = "color: blue";
  } else if (mostrarCasa() === "Hufflepuff") {
    colorC.style = "color: #F6DF39";
  } else if (mostrarCasa() === "Gryffindor") {
    colorC.style = "color: red";
  } else if (mostrarCasa() === "Slytherin") {
    colorC.style = "color: green";
  }
}
const no = document.getElementById("no");
no.addEventListener("click", nofunc);
function nofunc() {
  const nada = document.createElement("h2");
  nada.innerHTML = `Hasta luego`;
  document.body.append(nada);
  si.remove();
  no.remove();
}
