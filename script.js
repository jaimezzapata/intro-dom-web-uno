let usuarios = [
    {
        nombre: 'Jaime Zapata Valencia',
        correo: 'correo@correo.com',
        contrasena: '1234567',
        profesion: 'Developer',
        usuario: 'admin'
    },
    {
        nombre: 'Mariana Reestrepo',
        correo: 'correo@correo.com',
        contrasena: '1234567',
        profesion: 'UX/UI',
        usuario: 'mariana'
    },
]
console.log(usuarios)
function iniciarSesion() {
    let usuario = document.getElementById("usuario").value
    let contrasena = document.getElementById("contrasena").value
    // let auth = usuarios.find((item) => usuario == item.usuario)
    let auth = usuarios.some((item) => usuario == item.usuario)
    console.log(auth)
    // usuarios.some(()=>)
    if (auth) {
        console.log('Inicio de sesión')
    } else {
        console.log('Error de credenciales')
    }
}

function registrarUsuario() {
    let usuario = document.getElementById("rusuario").value
    let contrasena = document.getElementById("rcontrasena").value
    let correo = document.getElementById("rcorreo").value
    let nombre = document.getElementById("rnombre").value
    let profesion = document.getElementById("rprofesion").value
    let objeto = {
        usuario: usuario,
        contrasena: contrasena,
        correo: correo,
        nombre: nombre,
        profesion: profesion
    }
    usuarios.push(objeto)
}

let objeto = {
    nombre: 'Jaime Zapata Valencia',
    correo: 'correo@correo.com',
    contrasena: '1234567',
    profesion: 'Developer',
    usuario: 'admin'
}


console.log(objeto.nombre)
console.log(objeto.profesion)