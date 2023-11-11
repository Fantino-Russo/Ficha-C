const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero")
jugador.posicion = 350;
jugador.velocidad = 5;
let flechaDerecha = false;
let flechaIzquierda = false;

function iniciarJuego(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'ArrowLeft'){
            flechaIzquierda = true;
        }
        else if ((event.key === 'ArrowRight')){
            flechaDerecha = true;
        }
    });
    document.addEventListener('keyup', function(event){
        if (event.key === 'ArrowLeft'){
            flechaIzquierda = false;
        }
        else if (event.key === 'ArrowRight'){
            flechaDerecha = false;
        }
    });
    setInterval(frames, 16); 
}
function verificarColision(){

}

function frames(){ //en esta funcion corre todo el juego, es cada fotograma.
    if ( (jugador.posicion < 490) && (flechaDerecha)){
        jugador.posicion += jugador.velocidad;
    }
    if ((jugador.posicion > 210) && (flechaIzquierda)){
        jugador.posicion -= jugador.velocidad;
    }
    jugador.style.left = `${jugador.posicion}px`;

    
}

iniciarJuego();
