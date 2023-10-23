const jugador = document.getElementById("jugador");
const limite = document.querySelector(".pared");
let posicion = 350;
document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowLeft'){
        posicion-=10;
    }
    else if (event.key === 'ArrowRight'){
        posicion+=10;
    }
    jugador.style.left=`${posicion}px`;
})
