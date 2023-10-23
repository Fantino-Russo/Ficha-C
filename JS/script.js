const jugador = document.getElementById("jugador");
const limite = document.querySelector(".pared");
let posicion = 350;
document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowLeft'){
        posicion-=5;
    }
    else if (event.key === 'ArrowRight'){
        posicion+=5;
    }
    
    jugador.style.left=`${posicion}px`;
})
