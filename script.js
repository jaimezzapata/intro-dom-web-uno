function iniciarSesion() {
    // console.log('Inicio de sesión')
    // let label = document.getElementById('label')
    // console.log(label)
    let usuario = document.getElementById("usuario").value
    let contrasena = document.getElementById("contrasena").value
    if (usuario == 'Jaime' && contrasena == '1234') {
        console.log('Inicio de sesión')
    } else {
        console.log('Error de credenciales')
    }
}
