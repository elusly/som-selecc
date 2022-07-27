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
const boton2 = document.getElementById("boton2");
const form = document.getElementById("registro");
chequearForm();

boton1.addEventListener("click", registro);

function registro() {
  form.style.display = "block";
  boton1.style = "color: black; border: 1px solid black;";
}
class Usuario {
  constructor(nombre, edad, nacionalidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
  }
}
// Acá hice el registro en el HTML. Los valores de los inputs se guardan en un una variable
//que luego se almacena en una array.
let input1 = document.getElementById("name");
let input2 = document.getElementById("age");
let input3 = document.getElementById("nac");
let butSend = document.getElementById("butSend");

let usuario1;
const usuarios = [];
let nombre;
let edad;
let nacionalidad;

input1.onchange = () => {
  nombre = input1.value;
  console.log(nombre);
};

input2.onchange = () => {
  edad = input2.value;
  console.log(edad);
};

input3.onchange = () => {
  nacionalidad = input3.value;
  console.log(nacionalidad);
};

// Usé el localStorage para que una vez que se haya enviado el formulario, que desaparezca el formulario
// y el botón de envío
butSend.addEventListener("click", crearUsuario);
function crearUsuario() {
  if (
    nacionalidad === undefined ||
    nombre === undefined ||
    edad === undefined
  ) {
    swal("Atención!", "Por favor, completar todos los datos.", "error");
  } else {
    usuario1 = new Usuario(nombre, edad, nacionalidad);
    usuarios.push(usuario1);
    const UsJSON = JSON.stringify(usuario1);
    localStorage.setItem("Formulario", "Enviado");
    localStorage.setItem("Usuario", UsJSON);
    localStorage.setItem("NombreDeUsuario", usuario1.nombre);
    chequearForm();
  }
}

function chequearForm() {
  const user = localStorage.getItem("Usuario");

  if (user) {
    const intro = document.getElementById("intro__text");
    intro.style.display = "none";
    form.style.display = "none";
    boton2.style.display = "block";
    boton1.remove();

    const header = document.getElementById("header");
    const loggeado = document.createElement("span");

    loggeado.innerHTML = `<p class="login">Saludos <a href="pages/profile.html"class="nombrelink">${localStorage.getItem(
      "NombreDeUsuario"
    )}</a>!</p>`;
    header.appendChild(loggeado);

    const logout = document.createElement("span");
    logout.innerHTML = `<button type="button" class="logout">Cerrar sesión</button>`;
    header.appendChild(logout);
    logout.addEventListener("click", logOut);

    function logOut() {
      localStorage.clear();
      window.location.reload();
    }
  }
}

// Este es el botón de "comenzar test" y también utilicé el localStorage para que
// no se ejecute el evento de este botón hasta que no se haya registrado el usuario
// Y una vez que se aprieta el "comenzar test" también desaparece el botón

boton2.addEventListener("click", testAparece);
function testAparece() {
  const secTest = document.getElementById("inicio__test");

  const formEnviado = localStorage.getItem("Formulario");
  if (formEnviado !== null) {
    secTest.style.display = "block";

    boton1.remove();
    boton2.remove();
  }
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
  localStorage.setItem("Resultados", mostrarCasa());
  const casaCont = document.getElementById("casa");
  const casaNombre = document.createElement("div");
  casaNombre.innerHTML = `<h2 class="casaNombre">Su casa es <span id="colorCasa">${mostrarCasa()}</span></h2>`;
  casaCont.appendChild(casaNombre);
  si.remove();
  no.remove(); //Acá le agregué colorcito a los nombres de las casas jeje :)

  const colorC = document.getElementById("colorCasa");
  if (mostrarCasa() === "Ravenclaw") {
    colorC.style = "color: blue";
  } else if (mostrarCasa() === "Hufflepuff") {
    colorC.style = "color: #f4c646";
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

// Le agregué un poco de CSS para hacerlo más lindo jaja, le falta al diseño obviamente pero le quedó
// una estética vintage que me gusta también jajaja.
