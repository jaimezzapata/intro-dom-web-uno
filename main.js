import { recetasNoVegetarianas, recetasVegetarianas } from "./database.js";

function crearCardReceta() {
  let nombre = document.createElement("h3");
  let descripcion = document.createElement("p");
  let dificultad = document.createElement("p");
  let tiempoPreparacion = document.createElement("p");
  let tipo = document.createElement("p");
  let ingredientes = document.createElement("p");
  let listadoIngredientes = document.createElement("ul");
  let ingrediente = document.createElement("li");
  let pasos = document.createElement("p");
  let listadoPasos = document.createElement("ol");
  let paso = document.createElement("li");
  let card = document.createElement("div");
  listadoPasos.append(paso, paso, paso);
  listadoIngredientes.append(ingrediente, ingrediente, ingrediente);
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
}

function agregarRecetaHtml() {}

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
