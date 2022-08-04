let modoEdicion = false;
const datosUsuario = JSON.parse(localStorage.getItem("Usuario"));
renderizarPerfil(modoEdicion);
console.log(datosUsuario.nombre);

function renderizarPerfil(modo) {
  const editar = document.getElementById("editar");
  const perfilAge = document.getElementById("profile__age");
  const perfilNac = document.getElementById("profile__nac");
  const perfilName = document.getElementById("profile__name");
  if (modo) {
    const perfilCuadro = document.getElementById("perfil");
    perfilCuadro.style.height = "fit-content";
    editar.innerText = "Guardar";
    perfilName.innerHTML = `<label for="name" class="form-label">Nombre:</label>
    <input
      type="text"
      class="form-control"
      id="newName"
      style= "width: 150px;"
      value="${datosUsuario.nombre}"
  
    />`;
    perfilAge.innerHTML = `<label for="name" class="form-label">Edad:</label>
    <input
      type="number"
      class="form-control"
      id="newAge"
      style= "width: 150px;"
      value="${datosUsuario.edad}"
    />`;
    perfilNac.innerHTML = `<label for="name" class="form-label">Nacionalidad:</label>
    <input
      type="text"
      class="form-control"
      id="newNac"
      style= "width: 200px;"
      value="${datosUsuario.nacionalidad}"
    />`;
    let inputNewNa = document.getElementById("newName");
    let inputNewAg = document.getElementById("newAge");
    let inputNewNac = document.getElementById("newNac");
    inputNewNa.onchange = () => {
      datosUsuario.nombre = inputNewNa.value;
      console.log(datosUsuario.nombre);
    };

    inputNewAg.onchange = () => {
      datosUsuario.edad = inputNewAg.value;
      console.log(datosUsuario.edad);
    };

    inputNewNac.onchange = () => {
      datosUsuario.nacionalidad = inputNewNac.value;
      console.log(datosUsuario.nacionalidad);
    };
    editar.addEventListener("click", () => {
      const NewUsJSON = JSON.stringify(datosUsuario);
      localStorage.setItem("Usuario", NewUsJSON);
      renderizarPerfil(false);
    });
  } else {
    editar.innerText = "Editar";
    editar.addEventListener("click", () => renderizarPerfil(true));
    perfilName.innerText = `Nombre: ${datosUsuario.nombre}`;

    perfilAge.innerText = `Edad: ${datosUsuario.edad}`;

    perfilNac.innerText = `Nacionalidad: ${datosUsuario.nacionalidad}`;
  }
}

const resultadosTest = document.getElementById("resultadosTest");
const casaNombreJSON = JSON.parse(localStorage.getItem("Resultados"));
if (casaNombreJSON === null) {
  resultadosTest.innerText = "Todavía no ha tomado el test de selección";
} else {
  console.log(casaNombreJSON);
  for (let i = 0; i < casaNombreJSON.length; i++) {
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.innerText = `${casaNombreJSON[i].name}`;
    span.style = houseColor(casaNombreJSON[i].name);
    h4.append(span);
    h4.innerHTML += ` - ${casaNombreJSON[i].date}`;

    resultadosTest.appendChild(h4);
  }
}

function houseColor(casa) {
  if (casa === "Ravenclaw") {
    return "color: blue";
  } else if (casa === "Hufflepuff") {
    return "color: #c19007";
  } else if (casa === "Gryffindor") {
    return "color: red";
  } else if (casa === "Slytherin") {
    return "color: green";
  }
}
