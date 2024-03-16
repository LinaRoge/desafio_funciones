//Creamos las variables y les asignamos el elemento ID mas el color predeterminado
var div1 = document.getElementById("div1");
div1.style.background = "blue";
var div2 = document.getElementById("div2");
div2.style.background = "red";
var div3 = document.getElementById("div3");
div3.style.background = "green ";
var div4 = document.getElementById("div4");
div4.style.background = "yellow";

// llamamos la función al hacer click
div1.addEventListener("click", function () {
  colores("div1");
});

div2.addEventListener("click", function () {
  colores("div2");
});

div3.addEventListener("click", function () {
  colores("div3");
});

div4.addEventListener("click", function () {
  colores("div4");
});

//Declaramos la función
function colores(id) {
  const ele = document.getElementById(id);
  ele.style.backgroundColor = "black";
}
