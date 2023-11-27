const articleAgregarTarea = document.querySelector(".agregarTarea");
const form = document.querySelector("#form");
const listaTareas = document.querySelector(".listaTareas");

const input = document.createElement("input");
input.className = "form-control w-100 my-3";
form.appendChild(input);

const btnAgregar = document.createElement("button");
btnAgregar.innerHTML = "Agregar Tarea";
btnAgregar.className = "btn btn-danger";
form.appendChild(btnAgregar);

const agregarTarea = (e) => {
  e.preventDefault();
  if (input.value != "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listaTareas.appendChild(li);

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-danger m-3";
    btnEliminar.innerHTML = "eliminar";
    li.appendChild(btnEliminar);

    const eliminarTarea = () => {
      li.className = "ocultarLi";
    };
    btnEliminar.addEventListener("click", eliminarTarea);
  } else {
    alert("no ingreso una tarea");
  }
};

btnAgregar.addEventListener("click", agregarTarea);