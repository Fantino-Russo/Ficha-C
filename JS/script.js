const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero");
jugador.posicion = 350;
jugador.velocidad = 5;
jugador.velocidadV = 5;
let flechaDerecha = false;
let flechaIzquierda = false;
let flechaArriba = false;
let arregloAuto = [];
let i = 0;


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
        
    }
    if (Math.random() < 0.01){
        
        arregloAuto[i] = crearAutos();
        i++;
        
    }
    
     
    for(let i = 0 ;i < arregloAuto.length; i++){
            
        arregloAuto[i].style.top = `${parseInt(arregloAuto[i].style.top || 0) + jugador.velocidadV}px`;
        arregloAuto[i].style.left = `${parseInt(arregloAuto[i].style.left || 0) + jugador.velocidadV}px`;
            
    }
   
    velocidadCalle();
    
}
function velocidadCalle(){
    let aux = jugador.velocidadV;
    let id= setInterval(function(){
        
        fondo = (fondo === 1) ? 2 : 1;  // Explicacion: (condicion) ? valor si true : valor si false; 
        // Es decir que verifica con una condicion un valor y si es verdadero el valor es esto, si es falso lo otro
        tablero.style.backgroundImage = `url(../Imagenes/Fondo2-lineas${fondo}.png)`;
        console.log(jugador.velocidadV);
        if (jugador.velocidadV != aux){
            clearInterval(id);
            console.log("Saliendo");
        }
        
    },(1000));
    
    
}

function crearAutos(){
        let auto = document.createElement("div");
        auto.className = "autoEnemigo";
        tablero.appendChild(auto);
        
        return auto;
}


let fondo = 1;
iniciarJuego();

