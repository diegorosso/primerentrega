
let listaTareas = [];


function agregarTarea() {
  const descripcion = prompt("Por favor, ingresa la descripción de la tarea:");
  if (descripcion) {
    const tarea = { id: Date.now(), descripcion: descripcion.trim(), completada: false };
    listaTareas.push(tarea);
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
      const estado = tarea.completada ? "✅" : "⏳";
      tareasTexto += `${indice + 1}. ${tarea.descripcion} (${estado})\n`;
    });
    alert(tareasTexto);
  }
}

function mostrarTareasPendientes() {
  const tareasPendientes = listaTareas.filter(tarea => !tarea.completada);
  if (tareasPendientes.length === 0) {
    alert("No hay tareas pendientes.");
  } else {
    let tareasTexto = "Tareas pendientes:\n";
    tareasPendientes.forEach((tarea, indice) => {
      tareasTexto += `${indice + 1}. ${tarea.descripcion}\n`;
    });
    alert(tareasTexto);
  }
}

function buscarTarea() {
  const termino = prompt("Ingresa una palabra clave para buscar:");
  if (!termino) {
    alert("Por favor, ingresa un término de búsqueda.");
    return;
  }
  const resultados = listaTareas.filter(tarea => tarea.descripcion.toLowerCase().includes(termino.toLowerCase()));
  if (resultados.length === 0) {
    alert("No se encontraron tareas que coincidan.");
  } else {
    let resultadosTexto = "Resultados de búsqueda:\n";
    resultados.forEach((tarea, indice) => {
      resultadosTexto += `${indice + 1}. ${tarea.descripcion}\n`;
    });
    alert(resultadosTexto);
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
