let usuarios = [
    {
        nombre: 'Jaime Zapata Valencia',
        correo: 'correo@correo.com',
        contrasena: '1234567',
        profesion: 'Developer',
        usuario: 'admin'
    }
]
console.log(usuarios)
function iniciarSesion() {
    let usuario = document.getElementById("usuario").value
    let contrasena = document.getElementById("contrasena").value
    if (usuario == usuarios[0].usuario && contrasena == '1234') {
        console.log('Inicio de sesión')
    } else {
        console.log('Error de credenciales')
    }
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