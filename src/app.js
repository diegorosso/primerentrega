
let listaTareas = [];

function agregarTarea() {
  const descripcion = prompt("Por favor, ingresa la descripción de la tarea:");
  if (descripcion) {
    listaTareas.push(descripcion.trim());
    alert("¡Tu tarea se ha agregado con éxito!");
  } else {
    alert("No se puede agregar una tarea sin descripción.");
  }
}

function mostrarTareas() {
  if (listaTareas.length === 0) {
    alert("No hay tareas pendientes.");
  } else {
    let tareasTexto = "Tus tareas actuales:\n";
    listaTareas.forEach((tarea, indice) => {
      tareasTexto += `${indice + 1}. ${tarea}\n`;
    });
    alert(tareasTexto);
  }
}

function eliminarTarea() {
  if (listaTareas.length === 0) {
    alert("No hay tareas para eliminar.");
    return;
  }

  const indiceTarea = parseInt(
    prompt("Ingresa el número de la tarea que deseas eliminar:")
  );

  if (isNaN(indiceTarea) || indiceTarea < 1 || indiceTarea > listaTareas.length) {
    alert("Por favor, ingresa un número válido.");
  } else {
    listaTareas.splice(indiceTarea - 1, 1);
    alert("La tarea seleccionada ha sido eliminada.");
  }
}
