const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero");
jugador.posicion = 350;
jugador.velocidad = 5;
jugador.velocidadV = 5;
let flechaDerecha = false;
let flechaIzquierda = false;
let flechaArriba = false;
let auto;



function iniciarJuego(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'ArrowLeft'){
            flechaIzquierda = true;
        }
        if ((event.key === 'ArrowRight')){
            flechaDerecha = true;
        }
        if (event.key === 'ArrowUp'){
            flechaArriba = true;
        }
    });
    document.addEventListener('keyup', function(event){
        if (event.key === 'ArrowLeft'){
            flechaIzquierda = false;
        }
         if (event.key === 'ArrowRight'){
            flechaDerecha = false;
        }
        if (event.key === 'ArrowUp'){
            flechaArriba = false;
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

    if (flechaArriba){
        jugador.velocidadV += 5;
        console.log ("hola");
    }
    if (Math.random() < 0.01){
         auto = crearAutos();
    }
    if (auto) {
        auto.style.top = `${parseInt(auto.style.top || 0) + jugador.velocidadV}px`;
    }
    
    
}
function velocidadCalle(){

    fondo = (fondo === 1) ? 2 : 1;  // Explicacion: (condicion) ? valor si true : valor si false; 
    // Es decir que verifica con una condicion un valor y si es verdadero el valor es esto, si es falso lo otro
    tablero.style.backgroundImage = `url(../Imagenes/Fondo2-lineas${fondo}.png)`;
    
}

function crearAutos(){
        auto = document.createElement("div");
        auto.className = "autoEnemigo";
        tablero.appendChild(auto);
        return auto;
}


let fondo = 1;
iniciarJuego();
setInterval(velocidadCalle, jugador.velocidadV * 10);