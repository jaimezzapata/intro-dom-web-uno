import { recetasNoVegetarianas, recetasVegetarianas } from "./database.js";

function crearCardReceta() {
  // document.getElementById("listadoRecetasVegetarianas").innerHTML = "";
  recetasVegetarianas.map((element) => {
    // console.log(element.ingredientes);
    let nombre = document.createElement("h3");
    let descripcion = document.createElement("p");
    let dificultad = document.createElement("p");
    let tiempoPreparacion = document.createElement("p");
    let tipo = document.createElement("p");
    let ingredientes = document.createElement("p");
    let listadoIngredientes = document.createElement("ul");
    let pasos = document.createElement("p");
    let listadoPasos = document.createElement("ol");
    let paso = document.createElement("li");
    let card = document.createElement("div");
    nombre.textContent = element.nombre;
    dificultad.textContent = element.dificultad;
    descripcion.textContent = element.descripcion;
    tiempoPreparacion.textContent = element.tiempo;
    ingredientes.textContent = "Ingredientes: ";
    element.ingredientes.map((index) => {
      let ingrediente = document.createElement("li");
      ingrediente.textContent = index;
      listadoIngredientes.appendChild(ingrediente);
    });
    pasos.textContent = "Pasos:";
    element.pasos.map((index) => {
      let paso = document.createElement("li");
      paso.textContent = index;
      listadoPasos.appendChild(paso);
    });
    tipo.textContent = element.tipo;
    card.append(
      nombre,
      descripcion,
      dificultad,
      tiempoPreparacion,
      tipo,
      ingredientes,
      listadoIngredientes,
      pasos,
      listadoPasos
    );
    console.log(card);
    card.classList.add("card");
    agregarRecetaHtml(card);
  });
}
function agregarRecetaHtml(card) {
  document.getElementById("listadoRecetasVegetarianas").append(card);
}

document
  .getElementById("btnVegetarianas")
  .addEventListener("click", mostrarRecetasVegetarianas);
function mostrarRecetasVegetarianas() {
  document.getElementById("recetas-vegetarianas").style.display = "flex";
  document.getElementById("recetas-no-vegetarianas").style.display = "none";
  crearCardReceta();
  console.log(recetasVegetarianas);
}

document
  .getElementById("btnNoVegetarianas")
  .addEventListener("click", mostrarRecetasNoVegetarianas);
function mostrarRecetasNoVegetarianas() {
  document.getElementById("recetas-vegetarianas").style.display = "none";
  document.getElementById("recetas-no-vegetarianas").style.display = "flex";
  console.log(recetasNoVegetarianas);
}
