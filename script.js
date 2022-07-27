// El proyecto es un test de sombrero seleccionador de Harry Potter
const casas = {
  gryffindor: 0,
  slytherin: 0,
  hufflepuff: 0,
  ravenclaw: 0,
};
let todasCasas = 0;
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

fetch("/preguntas.json")
  .then((response) => response.json())
  .then((content) => cargarPreguntas(content));

function cargarPreguntas(preguntas) {
  for (const pregunta of preguntas) {
    const section = document.getElementById("inicio__test");
    const div = document.createElement("div");

    div.innerHTML = `<h2>${pregunta.pregunta}</h2>`;

    for (const respuesta of pregunta.respuestas)
      div.innerHTML += `<button id="${respuesta.name}" class="test__button--1">${respuesta.name}</button>`;

    section.append(div);

    for (const respuesta of pregunta.respuestas) {
      const boton = document.getElementById(`${respuesta.name}`);
      boton.addEventListener("click", () =>
        asignarPuntos(respuesta.type, pregunta.respuestas, pregunta.sumarMas)
      );
    }
  }
}

function asignarPuntos(casa, botones, sumarMas) {
  if (sumarMas) casas[casa] += 6;
  else casas[casa] += 5;

  console.log(casas);
  todasCasas += 1;

  botones.forEach(
    (respuesta) =>
      (document.getElementById(`${respuesta.name}`).disabled = true)
  );

  if (todasCasas === 3) {
    const ocultarTest = document.getElementById("inicio__test");
    ocultarTest.style.display = "none";
    const preguntar = document.getElementById("result");
    preguntar.style.display = "";
  }
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
let casasElegidas = [{ name: "", date: "" }];
function sifunc() {
  // const hoy = new Date();
  // console.log(hoy.toLocaleDateString("de-DE")); // D.M.YYYY
  casasElegidas.name.push(mostrarCasa());
  casasElegidas.date.push(new Date());
  localStorage.setItem("Resultados", JSON.stringify(casasElegidas));
  console.log(casasElegidas);
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
