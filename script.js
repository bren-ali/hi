


const boton = document.getElementById("btnAgregar");
boton.addEventListener("click", function() {
    alert("Producto agregado al carrito");
});

let titulo = document.getElementById("titulonuevo");
let botonMod = document.getElementById("btnCambiar");

botonMod.addEventListener("click", function(){
    titulo.textContent = "Nuevos Productos";
})