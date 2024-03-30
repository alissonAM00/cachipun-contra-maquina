
let contadorHumano =0;
let contadorMaquina=0;
let contadorEmpates=0;
let piedra=1;
let papel=2;
let tijera=3;


alert(`Bienvenido a cachipun contra la maquina`);

function cachipunMaquina(){
     return Math.floor(Math.random() * (4 - 1) + 1); 
}

// tirada usuario
function cachipunUsuario(){
    
    let jugada =(prompt("elige piedra, papel o tijera")).toLowerCase();

    if(jugada== "piedra"){
        return piedra;
    }else if(jugada=="papel"){
        return papel;
    } else if(jugada =="tijera"){
        return tijera;
    }else{
        return false;
    }


}

//rondas

function rondas(){
    let jugadas = Number(prompt("¿cuantas partidas quieres jugar?"));
    return jugadas;
}
 //jugada

 function jugar(){
    let jugadas = rondas();
    console.log("iniciando el juego:")
    for (let i =0; i< jugadas; i++){
        let jugadaUsuario = cachipunUsuario();
        let jugadaMaquina = cachipunMaquina();
        if(!jugadaUsuario){
            alert ("jugada inválida");
            break;
        }

        console.log("¡Jugada finalizada!");

        if (jugadaUsuario == jugadaMaquina){
            contadorEmpates++;
            console.log("Empate, tu jugada fue " +jugadaUsuario+ " y la maquina jugó " +jugadaMaquina+ ".")
        }else if ((jugadaUsuario == piedra & jugadaMaquina == tijera) || (jugadaUsuario == papel & jugadaMaquina == piedra) || (jugadaUsuario == tijera & jugadaMaquina == papel)){
            contadorHumano++;
            console.log("¡Has ganado! Tu jugada fue " +jugadaUsuario+ " y la maquina jugó " +jugadaMaquina+ ".")
        }else{
            contadorMaquina++;
            console.log("¡Has perdido! Tu jugada fue " +jugadaUsuario+ " y la maquina jugó " +jugadaMaquina+ ".")
        }
    }

    console.log("RESULTADO FINAL | Tu puntaje: " +contadorHumano+ " | Puntaje maquina: " +contadorMaquina+ " | Empates: " +contadorEmpates);
    alert (`ganaste ${contadorHumano} veces, la maquina gano ${contadorMaquina} veces, y empataron ${contadorEmpates} veces`);

    if (contadorHumano>contadorMaquina){
        alert(`felicidades, superaste a la maquina`);
    }else if(contadorMaquina>contadorHumano){
        alert( `lo siento la maquina te supero esta vez`); 
    } else if(contadorHumano==contadorMaquina){
        alert(`la maquina y tu empataron esta vez`);
    }
 }

 

 jugar();