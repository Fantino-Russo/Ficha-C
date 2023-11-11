const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero")
jugador.posicion = 350;
jugador.velocidad = 5;
jugador.velocidadV = 5;
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
function velocidadCalle(){

    fondo = (fondo === 1) ? 2 : 1;  // Explicacion: (condicion) ? valor si true : valor si false; 
    // Es decir que verifica con una condicion un valor y si es verdadero el valor es esto, si es falso lo otro
    tablero.style.backgroundImage = `url(../Imagenes/Fondo2-lineas${fondo}.png)`;
    setTimeout(velocidadCalle, jugador.velocidadV * 10);
}

let fondo = 1;
iniciarJuego();
velocidadCalle();