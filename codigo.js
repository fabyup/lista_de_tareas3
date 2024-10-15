let lista;

document.getElementById("entradaUsuario").addEventListener("input", function() {
  const usuario = this.value;
  if (usuario) {
    lista = new Lista(usuario);
    document.getElementById("entradaTarea").disabled = false;
    document.getElementById("botonAgregar").disabled = false;
  } else {
    lista = null;
    document.getElementById("entradaTarea").disabled = true;
    document.getElementById("botonAgregar").disabled = true;
  }
});

document.getElementById("botonAgregar").addEventListener("click", function() {
  const textoTarea = document.getElementById("entradaTarea").value;
  if (lista && textoTarea) {
    lista.agregarTarea(textoTarea);
    document.getElementById("entradaTarea").value = ""; // Limpiar el campo de entrada
  }
});
