class Lista {
  constructor(usuario) {
    this.usuario = usuario;
    this.tareas = [];
    this.cargarTareasDesdeLocalStorage();
  }

  agregarTarea(textoTarea) {
    if (textoTarea) {
      const tarea = {
        texto: textoTarea,
        completada: false
      };
      this.tareas.push(tarea);
      this.guardarTareasEnLocalStorage();
      this.renderizarTareas();
    }
  }

  editarTarea(indice, nuevoTexto) {
    if (nuevoTexto && indice >= 0 && indice < this.tareas.length) {
      this.tareas[indice].texto = nuevoTexto;
      this.guardarTareasEnLocalStorage();
      this.renderizarTareas();
    }
  }

  eliminarTarea(indice) {
    if (indice >= 0 && indice < this.tareas.length) {
      this.tareas.splice(indice, 1);
      this.guardarTareasEnLocalStorage();
      this.renderizarTareas();
    }
  }

  guardarTareasEnLocalStorage() {
    localStorage.setItem(`tareas_${this.usuario}`, JSON.stringify(this.tareas));
  }

  cargarTareasDesdeLocalStorage() {
    const tareasAlmacenadas = localStorage.getItem(`tareas_${this.usuario}`);
    this.tareas = JSON.parse(tareasAlmacenadas) || [];
    this.renderizarTareas();
  }

  renderizarTareas() {
    const listaDeTareas = document.getElementById("listaDeTareas");
    listaDeTareas.innerHTML = "";

    this.tareas.forEach((tarea, indice) => {
      const itemLista = document.createElement("li");
      itemLista.innerHTML = `
                <span>${tarea.texto}</span>
                <span>
                    <button class="boton-editar" onclick="lista.editarTarea(${indice}, prompt('Editar tarea:', '${tarea.texto}'))">Editar</button>
                    <button class="boton-eliminar" onclick="lista.eliminarTarea(${indice})">Eliminar</button>
                </span>
            `;
      listaDeTareas.appendChild(itemLista);
    });
  }
}

