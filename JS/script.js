const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero");
const auto = document.createElement("div");
jugador.posicion = 350;
jugador.velocidad = 5;
auto.velocidadV = 5;
let flechaDerecha = false;
let flechaIzquierda = false;

function iniciarJuego(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'ArrowLeft'){
            flechaIzquierda = true;
        }
        if ((event.key === 'ArrowRight')){
            flechaDerecha = true;
        }
        if (event.key === 'ArrowUp'){
            auto.velocidadV = 5;
        }
    });
    document.addEventListener('keyup', function(event){
        if (event.key === 'ArrowLeft'){
            flechaIzquierda = false;
        }
       else  if (event.key === 'ArrowRight'){
            flechaDerecha = false;
        }
        if (event.key === 'ArrowUp'){
            auto.velocidadV = 0.2;
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
    
}

let fondo = 1;
iniciarJuego();
setInterval(velocidadCalle, auto.velocidadV * 10);