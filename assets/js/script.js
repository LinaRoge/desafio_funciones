// Declaramos la función
function pintar() {
  // Al hacer click agrergamos el color amarillo
  ele.style.backgroundColor = "yellow";
}
// Obtenemos el elemento contenedor por su ID
const ele = document.getElementById("ele1");
//Llamamos la función pintar
ele.addEventListener("click", pintar);
//Agregamos un color predeterminado
ele.style.backgroundColor = "green";
