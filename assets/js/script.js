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

document.querySelectorAll(".btn_proyect").forEach(function(link){
    console.log(link);
    link.addEventListener("click", function(event){
        event.preventDefault();
        if (link.textContent == "ver menos") {
            link.textContent = "ver más";
        } else {
            link.textContent = "ver menos";
        }
        const cardbody = link.parentElement;
        console.log(cardbody);
        const parrafo = link.previousElementSibling;
        console.log(parrafo);
        parrafo.classList.toggle("d-none");
        const card = cardbody.parentElement;
        console.log(card);
        card.classList.toggle("bg-secondary");
    })
})
