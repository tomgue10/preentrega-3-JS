const inputNombre = document.querySelector("#input-nombre")
const btnIniciarSesion = document.querySelector("#btn-inciar-sesion")
const btnCerrarSesion= document.querySelector("#btn-cerrar-sesion")
let usuario = localStorage.getItem("usuario")

if (!usuario) {document.querySelector("#bienvenida").innerText = `Bienvenido a Soulking`}
else{document.querySelector("#bienvenida").innerText = `Bienvenido ${usuario} a Soulking`}

const guardarUsuario = () => {const usuario = inputNombre.value
    localStorage.setItem("usuario", usuario)
    inputNombre.value = ""
    document.querySelector("#bienvenida").innerText = `Bienvenido ${usuario} a Soulking`
}

const eliminarUsuario = () =>{localStorage.removeItem("usuario")}

btnIniciarSesion.addEventListener("click", guardarUsuario)
btnCerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("usuario")
    usuario = ""
    document.querySelector("#bienvenida").innerText = `Bienvenido a Soulking`
} )

