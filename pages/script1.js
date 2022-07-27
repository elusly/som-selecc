const datosUsuario = JSON.parse(localStorage.getItem("Usuario"));
const perfilName = document.getElementById("profile__name");
perfilName.innerText = `Nombre: ${datosUsuario.nombre}`;
const perfilAge = document.getElementById("profile__age");
perfilAge.innerText = `Edad: ${datosUsuario.edad}`;
const perfilNac = document.getElementById("profile__nac");
perfilNac.innerText = `Nacionalidad: ${datosUsuario.nacionalidad}`;
const resultadosTest = document.getElementById("resultadosTest");
const casaNombreJSON = JSON.parse(localStorage.getItem("Resultados"));
if (casaNombreJSON === null) {
  resultadosTest.innerText = "Todavía no ha tomado el test de selección";
} else {
  for (let i = 0; i < casaNombreJSON.length; i++) {
    resultadosTest.innerHTML = `<h4>${casaNombreJSON[i]}</h4>`;
  }
}

if (casaNombreJSON === "Ravenclaw") {
  resultadosTest.style = "color: blue";
} else if (casaNombreJSON === "Hufflepuff") {
  resultadosTest.style = "color: #f4c646";
} else if (casaNombreJSON === "Gryffindor") {
  resultadosTest.style = "color: red";
} else if (casaNombreJSON === "Slytherin") {
  resultadosTest.style = "color: green";
}
