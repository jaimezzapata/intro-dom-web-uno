import { recetasNoVegetarianas, recetasVegetarianas } from "./database.js"

document.getElementById('btnVegetarianas').addEventListener('click', mostrarRecetasVegetarianas)
function mostrarRecetasVegetarianas() {
    document.getElementById('recetas-vegetarianas').style.display = 'flex'
    document.getElementById('recetas-no-vegetarianas').style.display = 'none'
    console.log(recetasVegetarianas)
}

document.getElementById('btnNoVegetarianas').addEventListener('click', mostrarRecetasNoVegetarianas)
function mostrarRecetasNoVegetarianas() {
    document.getElementById('recetas-vegetarianas').style.display = 'none'
    document.getElementById('recetas-no-vegetarianas').style.display = 'flex'
    console.log(recetasNoVegetarianas)
}