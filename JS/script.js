const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero");
jugador.posicion = 350;
jugador.velocidad = 5;
jugador.velocidadV = 1;
let flechaDerecha = false;
let flechaIzquierda = false;
let flechaArriba = false;
let flechaAbajo = false;
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
        if (event.key === 'ArrowDown'){
            flechaAbajo = true;
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
        if (event.key === 'ArrowDown'){
            flechaAbajo = false;
        }
    });
    setInterval(frames, 16); 
}


function frames(){ //en esta funcion corre todo el juego, es cada fotograma.
    if ( (jugador.posicion < 490) && (flechaDerecha)){
        jugador.posicion += jugador.velocidad;
    }
    if ((jugador.posicion > 210) && (flechaIzquierda)){
        jugador.posicion -= jugador.velocidad;
    }
    jugador.style.left = `${jugador.posicion}px`;

    if (flechaArriba &&jugador.velocidadV <5){
        jugador.velocidadV += 0.025;
        
    }
    if (flechaAbajo && jugador.velocidadV > -1){
        jugador.velocidadV -= 0.05;
    }
    if (Math.random() < 0.01){
        
        arregloAuto[i] = crearAutos();
        i++;
        
    }
    
     
    for(let i = 0 ;i < arregloAuto.length; i++){
            
        arregloAuto[i].style.top = `${parseInt(arregloAuto[i].style.top || 40) + jugador.velocidadV}px`;
        // arregloAuto[i].style.left = `${parseInt(arregloAuto[i].style.left || 400) + jugador.velocidadV}px`;
            
    }
   
    verificarColision();
    
}
function velocidadCalle(){
    
    
    function cambiarFondo(){
        fondo = (fondo === 1) ? 2 : 1;  // Explicacion: (condicion) ? valor si true : valor si false; 
        // Es decir que verifica con una condicion un valor y si es verdadero el valor es esto, si es falso lo otro
        tablero.style.backgroundImage = `url(../Imagenes/Fondo2-lineas${fondo}.png)`;
        
        let aux = jugador.velocidadV;
            if (jugador.velocidadV <0){
                aux = 0.1;
            }
            
             setTimeout(cambiarFondo, (500 / (aux)));
        
            
    }
    
    cambiarFondo();
}


function crearAutos(){
        let auto = document.createElement("div");
        auto.className = "autoEnemigo";
        tablero.appendChild(auto);
        return auto;
}
function verificarColision(){
    
    for(let i=0; i < arregloAuto.length; i++){
        let dimensionesAuto = arregloAuto[i].getBoundingClientRect();
        let dimensionesJugador = jugador.getBoundingClientRect();
        if ((dimensionesJugador.left < dimensionesAuto.right) && (dimensionesJugador.right > dimensionesAuto.left) && (dimensionesJugador.top < dimensionesAuto.bottom) && (dimensionesJugador.bottom > dimensionesAuto.top)){

            console.log("colision")
            choque();
        }
    }
    
}    

let fondo = 1;
iniciarJuego();
velocidadCalle();
