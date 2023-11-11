const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero")
jugador.posicion = 350;
jugador.velocidad = 1;
document.addEventListener('keydown', function(event){
    if ((event.key === 'ArrowLeft') && (jugador.posicion>210) ){
        jugador.posicion -= 5 * jugador.velocidad;
    }
    else if ((event.key === 'ArrowRight') && (jugador.posicion<490)){
        jugador.posicion += 5 * jugador.velocidad;
    }
    
    jugador.style.left = `${jugador.posicion}px`;
});

function verificarColision(){
    
}


