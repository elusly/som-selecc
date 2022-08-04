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
// Esta es la sección de registro. Los valores de los inputs se guardan en un una variable
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
    const datosUsuario = JSON.parse(localStorage.getItem("Usuario"));
    loggeado.innerHTML = `<p class="login">Saludos ${datosUsuario.nombre}!</p>`;
    header.appendChild(loggeado);
    const perfil = document.createElement("span");
    perfil.innerHTML = `<a href="pages/profile.html"class="logout">Mi perfil</a>`;
    header.appendChild(perfil);
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
  const secTest = document.getElementById("test__1");

  const formEnviado = localStorage.getItem("Formulario");
  if (formEnviado !== null) {
    secTest.style.display = "block";

    boton1.remove();
    boton2.remove();
  }
}
// Acá está el fetch al json con las preguntas y los botones

fetch("./preguntas1.json")
  .then((response) => response.json())
  .then((content) => cargarPreguntas(content, 1));

fetch("./preguntas2.json")
  .then((response) => response.json())
  .then((content) => cargarPreguntas(content, 2));

// Acá a través de los fetch de json con las preguntas y respuestas,  creé un for of que
// haga que se genere en el HTML todas las preguntas, con botones como respuestas
function cargarPreguntas(preguntas, n) {
  for (const pregunta of preguntas) {
    const section = document.getElementById(`test__${n}`);
    const div = document.createElement("div");
    div.classList.add("animacion");
    div.innerHTML = `<h2>${pregunta.pregunta}</h2>`;
    for (const respuesta of pregunta.respuestas)
      div.innerHTML += `<button id="${respuesta.name}" class="test__button--1">${respuesta.name}</button>`;
    // Acá se crean los botones. Cada botón al apretarlo ejecuta una función que la explico más abajo
    section.append(div);
    for (const respuesta of pregunta.respuestas) {
      const boton = document.getElementById(`${respuesta.name}`);
      boton.addEventListener("click", () =>
        asignarPuntos(respuesta.type, pregunta.respuestas, pregunta.sumarMas)
      );
    }
  }
}
// Esta función lo que hace es que cuando se toca un botón, se le suma puntos a
// la casa a la que corresponde esa respuesta.
function asignarPuntos(casa, botones, sumarMas) {
  if (sumarMas) casas[casa] += 6;
  else casas[casa] += 5;

  console.log(casas);
  todasCasas += 1;

  botones.forEach(
    (respuesta) =>
      (document.getElementById(`${respuesta.name}`).disabled = true)
  );
  // Esto es una manera de controlar que respondan todas las preguntas:
  // creé una nueva variable que sume un punto con cada pregunta (todasCasas) y como
  // son 6 preguntas, puse para que si todasCasas es === 6 ahí recién se
  // pueda continuar con el resultado
  if (todasCasas === 3) {
    const section = document.getElementById("test__1");
    const test2Aparece = document.getElementById("test__2");
    test2Aparece.style.display = "block";
    section.style.display = "none";
  }
  if (todasCasas === 6) {
    const ocultarTest = document.getElementById("test__2");
    ocultarTest.style.display = "none";
    const preguntar = document.getElementById("result");
    preguntar.style.display = "";
  }
}
// Acá se hace la selección de la casa: se comparan todas las
// casas y la que tenga más puntos sumados es la elegida.
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
// Esta función revela el nombre de la casa que le tocó, y además carga ese resultado
// al local storage, junto con la fecha y hora en que fue obtenido, para que luego
// aparezca en la sección "perfil"
// También agrega un botón para volver a tomar el test
function sifunc() {
  const hoy = new Date();
  const resultados = JSON.parse(localStorage.getItem("Resultados")) || [];
  let minutos = hoy.getMinutes();
  if (minutos / 10 < 1) {
    minutos = "0" + minutos;
  }
  const nuevoResultado = {
    name: mostrarCasa(),
    date:
      hoy.toLocaleDateString("es-AR") + " - " + hoy.getHours() + ":" + minutos,
  };
  if (resultados.length < 7) {
    resultados.push(nuevoResultado);
  } else if (resultados.length >= 7) {
    resultados.shift();
    resultados.push(nuevoResultado);
  }
  localStorage.setItem("Resultados", JSON.stringify(resultados));
  const casaCont = document.getElementById("casa");
  const casaNombre = document.createElement("div");
  casaNombre.innerHTML = `<h1 class="casaNombre">¡¡¡<span id="colorCasa">${mostrarCasa()}</span>!!!</h1>`;
  casaNombre.classList.add("animacionResultado");
  const volverTest = document.createElement("div");
  volverTest.innerHTML = `<button class="test__volver">Volver a tomar el test</button>`;
  volverTest.addEventListener("click", () => window.location.reload());
  casaCont.appendChild(casaNombre);
  casaCont.appendChild(volverTest);
  si.remove();
  no.remove();
  //Acá le agregué colorcito a los nombres de las casas

  const colorC = document.getElementById("colorCasa");
  if (mostrarCasa() === "Ravenclaw") {
    colorC.style = "color: blue";
  } else if (mostrarCasa() === "Hufflepuff") {
    colorC.style = "color: #c19007";
  } else if (mostrarCasa() === "Gryffindor") {
    colorC.style = "color: red";
  } else if (mostrarCasa() === "Slytherin") {
    colorC.style = "color: green";
  }
}
const no = document.getElementById("no");
no.addEventListener("click", nofunc);
// Esta función simplemente hace que aparezca un "Hasta luego" y también
// aparece el botón de volver a tomar el test
function nofunc() {
  const nada = document.createElement("h2");
  nada.innerText = `Hasta luego`;
  const div = document.getElementById("resultado");
  nada.classList.add("hastaLuego");
  const volverTest = document.createElement("div");
  const casaCont = document.getElementById("casa");
  volverTest.innerHTML = `<button class="test__volver">Volver a tomar el test</button>`;
  volverTest.addEventListener("click", () => window.location.reload());
  casaCont.appendChild(volverTest);
  div.appendChild(nada);
  si.remove();
  no.remove();
}
