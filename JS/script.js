const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero")
jugador.posicion = 350;
jugador.velocidad = 1;
const Tipos = ["AutoDerecha1", "AutoDerecha2", "AutoCentro1", "AutoCentro2", "AutoIzquierda1", "AutoIzquierda2"];
document.addEventListener('keydown', function(event){
    if ((event.key === 'ArrowLeft') && (jugador.posicion>210) ){
        jugador.posicion -= 5 * jugador.velocidad;
    }
    else if ((event.key === 'ArrowRight') && (jugador.posicion<490)){
        jugador.posicion += 5 * jugador.velocidad;
    }
    
    jugador.style.left = `${jugador.posicion}px`;
});
function crearAutos(){
    const autoEnemigo = document.createElement('div').className("Autoenemigo1");

    // autoEnemigo.className = Tipos[Math.floor(Math.random() * Tipos.length)];
    tablero.appendChild(autoEnemigo);
    autoEnemigo.style.top = Math.random()*100;
}
// let Generador = Math.floor(Math.random() * 10);
// console.log(Generador);

crearAutos();


