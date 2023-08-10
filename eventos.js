document.addEventListener("DOMContentLoaded", function() {
const div = document.querySelector("div");
const boton = document.querySelector("button");
    
function saludar(){
    alert("Hola! Soy el div");
}

boton.addEventListener("click", function(event) {
event.stopPropagation();
}

div.addEventListener("click", saludar);
});
