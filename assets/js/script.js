//Función cambiar imagen
function cambiarImg() {
    if (document.getElementById("img").className == 'yo1') {

        document.getElementById("img").src = "assets/img/sobre-mi2.jpg";
        document.getElementById("img").className = "yo2"
    }
    else {
        document.getElementById("img").src = "assets/img/sobre-mi.jpg";
        document.getElementById("img").className = "yo1"
    }
}
