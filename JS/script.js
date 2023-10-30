const jugador = document.getElementById("jugador");
const limite = document.querySelector(".pared");
posicion = 350;
velocidad = 1;
document.addEventListener('keydown', function(event){
    if ((event.key === 'ArrowLeft') && (posicion>210) ){
        posicion -= 5 * velocidad;
    }
    else if ((event.key === 'ArrowRight') && (posicion<490)){
        posicion += 5 * velocidad;
    }
    
    jugador.style.left = `${posicion}px`;
});
