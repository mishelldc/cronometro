let div_cronometro = document.querySelector(".cronometro");
let tiempo;

function iniciar_cronometro(minutos, segundos){
    // Validamos los valores de entrada
    if (minutos < 0 || segundos < 0 || segundos >= 60) {
        console.error("Los valores de entrada no son válidos.");
        return;
    }

    // Mostramos el tiempo inicial
    mostrar_tiempo(minutos, segundos);

    // Definimos la función de actualización
    function actualizar (){
        // Si el tiempo llega a cero, detenemos el cronómetro
        if (minutos === 0 && segundos === 0) {
            detener_cronometro();
            return;
        }

        // Restamos un segundo al tiempo
        if (segundos === 0) {
            minutos--;
            segundos = 59;
        } else {
            segundos--;
        }

        // Mostramos el tiempo actualizado
        mostrar_tiempo(minutos, segundos);
    }

    // Actualizamos el tiempo cada segundo
    tiempo = setInterval(actualizar, 1000);
}

function mostrar_tiempo(minutos, segundos) {
    
    let minutos_mostrados = minutos < 10 ? "0" + minutos : minutos;
    let segundos_mostrados = segundos < 10 ? "0" + segundos : segundos;

    // Mostramos el tiempo en el div_cronometro
    div_cronometro.innerHTML = `${minutos_mostrados}:${segundos_mostrados}`;
}

function detener_cronometro() {
   
    clearInterval(tiempo);
}


iniciar_cronometro(10, 11);