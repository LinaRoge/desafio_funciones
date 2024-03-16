// Agregamos un evento para escuchar las teclas presionadas
document.addEventListener("keydown", function (event) {
  // Comprobamos si la tecla presionada es "A" o "a"
  if (event.key === "a" || event.key === "A") {
    div.style.backgroundColor = "pink";
  } // Si es "S o "s", llamamos a la función cambia el color a Naranja
  else if (event.key === "s" || event.key === "S") {
    div.style.backgroundColor = "orange";
  } // Si es "D o "d", llamamos a la función cambia el color a celeste
  else if (event.key === "d" || event.key === "D") {
    div.style.backgroundColor = "rgba(6, 156, 243, 0.685)";
  } // Si es "q o "Q", llamamos a la función cambia el color a morado y crea una nueva div
  else if (event.key === "q" || event.key === "Q") {
    agregarElemento("violet");
  } // Si es "q o "Q", llamamos a la función cambia el color a gris y crea una nueva div
  else if (event.key === "w" || event.key === "W") {
    agregarElemento("grey");
  } // Si es "q o "Q", llamamos a la función cambia el color a café y crea una nueva div
  else if (event.key === "e" || event.key === "E") {
    agregarElemento("brown");
  }
});

function agregarElemento(color) {
  // Obtenemos el elemento contenedor por su ID
  contenedor = document.getElementById("contenedor");
  // Creamos un nuevo elemento <div>
  nuevoElemento = document.createElement("div");
  // agregamos el estilo deseado
  nuevoElemento.style.width = 200 + "px";
  nuevoElemento.style.height = 200 + "px";
  nuevoElemento.style.border = "2px solid";
  nuevoElemento.style.margin = "20px";
  nuevoElemento.style.backgroundColor = color;
  // Agregar el nuevo div al contenedor
  contenedor.appendChild(nuevoElemento);
}

// Agrega bordes al div
var div = document.getElementById("key");
div.style.border = "2px solid";
div.style.width = "200px";
div.style.height = "200px";
div.style.margin = "20px";
