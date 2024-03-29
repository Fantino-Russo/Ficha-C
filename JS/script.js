const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero");
const score = document.getElementById("score")
let contador = 200;
jugador.posicion = 350;
jugador.velocidad = 5;
jugador.velocidadV = 1;
let flechaDerecha = false;
let flechaIzquierda = false;
let flechaArriba = false;
let flechaAbajo = false;
let arregloAuto = [];
let i = 0;
let puedeMoverse = true;
let esRapido = false;
let spawnPoint = 0;
let llave = true;
let autoRemovido = false;

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
    if (puedeMoverse){
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
        if (!flechaArriba && jugador.velocidadV > -1){
            jugador.velocidadV -= 0.025;
        }
        if (flechaAbajo && jugador.velocidadV > -1){
            jugador.velocidadV -= 0.05;
        }
    }
    if (Math.random() < 0.01){
        
        arregloAuto[i] = crearAutos();

        spawnPoint = esRapido ? 100 : 400;
        arregloAuto[i].style.top = `${spawnPoint}px`
        if (spawnPoint == 400){
            contador +=1;
        }
        i++;
        
    }
    if (jugador.velocidadV >= 1){
        esRapido = true;
    }
    else {
        esRapido = false;
    }
    score.textContent = contador;
    console.log(jugador.velocidadV);

    moverAutos();
    verificarColision();
    
}
function velocidadCalle(){
    
    
    function cambiarFondo(){
        fondo = (fondo === 1) ? 2 : 1;  // Explicacion: (condicion) ? valor si true : valor si false; 
        // Es decir que verifica con una condicion un valor y si es verdadero el valor es esto, si es falso lo otro
        // tablero.style.backgroundImage = `url(../Imagenes/Fondo2-lineas${fondo}.png)`;
        tablero.classList.toggle("imagen1", fondo === 1)
        tablero.classList.toggle("imagen2", fondo === 2)
        let aux = jugador.velocidadV;
            if (jugador.velocidadV <0){
                aux = 0.5;
            }
            
             setTimeout(cambiarFondo, (500 / (aux)));
        
            
    }
    
    cambiarFondo();
}


function crearAutos(){
        //se crae el auto
        let auto = document.createElement("div");
        auto.className = "autoEnemigo";
        tablero.appendChild(auto);

        //Se le asigna una clase al auto
        let claseRandom = (Math.random() < 0.33) ? "izquierda" : (Math.random() < 0.66) ? "centro" : "derecha";
        auto.classList.add(claseRandom);
        //Chance al azar de elegir una clase    

        return auto;
}
function moverAutos(){
    let autosActivos = [];
    for(let i = 0 ;i < arregloAuto.length; i++){
        if (arregloAuto[i]){
        arregloAuto[i].style.top = `${parseInt(arregloAuto[i].style.top || 100) + jugador.velocidadV}px`;
       
        if (arregloAuto[i].classList.contains("izquierda")){
            let movimientoIzquierda = (parseInt(arregloAuto[i].style.top || 100) - 900)/(32/-14);
            
            arregloAuto[i].style.left = `${movimientoIzquierda }px`;
        }
        
         if (arregloAuto[i].classList.contains("derecha")){
            let movimientoDerecha =  (parseInt(arregloAuto[i].style.top || 100) + 700)/(32/14);
            arregloAuto[i].style.left = `${movimientoDerecha }px`;
        }
        if (arregloAuto[i]){
            posicionAuto = parseInt(arregloAuto[i].style.top || 100);
        }
        
        
        if (posicionAuto >= 90 && posicionAuto <= 400){
            autosActivos.push(arregloAuto[i]);
        }
        else{
            arregloAuto[i].remove();
            contador--;
            
            console.log(posicionAuto); 
        
        }
            
        }
    }
     arregloAuto = autosActivos;   
        
            
}


function verificarColision(){
    
    for(let i=0; i < arregloAuto.length; i++){
        let dimensionesAuto = arregloAuto[i].getBoundingClientRect();
        let dimensionesJugador = jugador.getBoundingClientRect();
        if ((dimensionesJugador.left < dimensionesAuto.right) && (dimensionesJugador.right > dimensionesAuto.left) && (dimensionesJugador.top < dimensionesAuto.bottom) && (dimensionesJugador.bottom > dimensionesAuto.top)){
            choque();
        }
    }
    
}    
function choque(){
    jugador.velocidadV = -1;
    puedeMoverse = false;

    setTimeout(function() {
        puedeMoverse = true;
    }, 750);
    
}


let fondo = 1;
iniciarJuego();
velocidadCalle();
