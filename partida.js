let ficha = document.querySelector('.ficha');
let fichaB = document.querySelector('.fichaB');
let avanzardado1 = document.querySelector('#lanzardado');
let avanzardado2 = document.querySelector('#Dado2');

let Preguntas = document.querySelector('.Preguntas');
let Respuesta1 = document.querySelector('.Respuesta1');
let Respuesta2 = document.querySelector('.Respuesta2');
let Respuesta3 = document.querySelector('.Respuesta3');
let nuevaPartida = document.querySelector("#nuevaPartida");


nuevaPartida.addEventListener("click", function() {
    i = 0;
    d = 0;

    partida = {
        torn: "A",
        jugadors: [
            { nom: "A", posicio: 0 },
            { nom: "B", posicio: 0 }
        ],
        guanyador: null,
        ultimaTirada: null
    };

    indicePregunta = 0;
    jugadorPregunta = "";
    jugadorPierdeTurno = "";
    estado = "turno";

    ficha.style.left = posiciones[0].ficha.A.X + "px";
    ficha.style.top = posiciones[0].ficha.A.y + "px";
    fichaB.style.left = posiciones[0].ficha.B.X + "px";
    fichaB.style.top = posiciones[0].ficha.B.y + "px";

    nuevaPartida.style.display = "none";

    Preguntas.style.display = "none";
    Respuesta1.style.display = "none";
    Respuesta2.style.display = "none";
    Respuesta3.style.display = "none";

    mostrarJSON();

    localStorage.removeItem("partidaOca");
});


let preguntes = [
    {
        pregunta: "Quina és la capital d'Espanya?",
        respostes: ["Madrid", "València", "Sevilla"],
        correcta: "Madrid"
    },
    {
        pregunta: "Quants continents hi ha?",
        respostes: ["5", "7", "8"],
        correcta: "7"
    },
    {
        pregunta: "Quin país té forma de bota?",
        respostes: ["Itàlia", "Portugal", "Grècia"],
        correcta: "Itàlia"
    },
    {
        pregunta: "Quants jugadors té un equip de futbol al camp?",
        respostes: ["9", "11", "12"],
        correcta: "11"
    },
    {
        pregunta: "Quin és el planeta més proper al Sol?",
        respostes: ["Venus", "Mercuri", "Júpiter"],
        correcta: "Mercuri"
    },
    {
        pregunta: "Quin animal és conegut com el rei de la selva?",
        respostes: ["Tigre", "Lleó", "Goril·la"],
        correcta: "Lleó"
    },
    {
        pregunta: "Quina és la capital de França?",
        respostes: ["Roma", "París", "Londres"],
        correcta: "París"
    },
    {
        pregunta: "Quants dies té una setmana?",
        respostes: ["5", "7", "8"],
        correcta: "7"
    },
    {
        pregunta: "Quin esport es juga amb una raqueta i una pilota?",
        respostes: ["Futbol", "Tennis", "Bàsquet"],
        correcta: "Tennis"
    },
    {
        pregunta: "Quin és l'oceà més gran del món?",
        respostes: ["Atlàntic", "Índic", "Pacífic"],
        correcta: "Pacífic"
    },
    {
        pregunta: "Quina és la capital d'Itàlia?",
        respostes: ["Milà", "Roma", "Nàpols"],
        correcta: "Roma"
    },
    {
        pregunta: "Quants mesos té un any?",
        respostes: ["10", "12", "14"],
        correcta: "12"
    },
    {
        pregunta: "Quin és l'animal terrestre més ràpid?",
        respostes: ["Lleó", "Guepard", "Cavall"],
        correcta: "Guepard"
    },
    {
        pregunta: "Quin color s'obté barrejant blau i groc?",
        respostes: ["Verd", "Taronja", "Lila"],
        correcta: "Verd"
    },
    {
        pregunta: "Quin és el satèl·lit natural de la Terra?",
        respostes: ["Mart", "La Lluna", "El Sol"],
        correcta: "La Lluna"
    },
    {
        pregunta: "Quants costats té un triangle?",
        respostes: ["3", "4", "5"],
        correcta: "3"
    },
    {
        pregunta: "Quin és el país més gran del món per superfície?",
        respostes: ["Canadà", "Xina", "Rússia"],
        correcta: "Rússia"
    },
    {
        pregunta: "Quin òrgan bombeja la sang pel cos?",
        respostes: ["Pulmó", "Cor", "Estómac"],
        correcta: "Cor"
    },
    {
        pregunta: "Quin és el resultat de 8 x 7?",
        respostes: ["54", "56", "64"],
        correcta: "56"
    },
    {
        pregunta: "Quina llengua es parla principalment al Brasil?",
        respostes: ["Castellà", "Francès", "Portuguès"],
        correcta: "Portuguès"
    },
    {
        pregunta: "Quin animal pon ous?",
        respostes: ["Gat", "Gallina", "Gos"],
        correcta: "Gallina"
    },
    {
        pregunta: "Quin és el metall que té el símbol químic Au?",
        respostes: ["Plata", "Or", "Ferro"],
        correcta: "Or"
    },
    {
        pregunta: "Quants minuts té una hora?",
        respostes: ["30", "60", "100"],
        correcta: "60"
    },
    {
        pregunta: "En quin continent es troba Egipte?",
        respostes: ["Àfrica", "Europa", "Amèrica"],
        correcta: "Àfrica"
    },
    {
        pregunta: "Quin és el planeta conegut com el planeta vermell?",
        respostes: ["Mart", "Saturn", "Neptú"],
        correcta: "Mart"
    },
    {
        pregunta: "Quin instrument té tecles blanques i negres?",
        respostes: ["Guitarra", "Piano", "Violí"],
        correcta: "Piano"
    },
    {
        pregunta: "Quina estació de l'any ve després de la primavera?",
        respostes: ["Hivern", "Tardor", "Estiu"],
        correcta: "Estiu"
    },
    {
        pregunta: "Quants segons té un minut?",
        respostes: ["30", "60", "90"],
        correcta: "60"
    },
    {
        pregunta: "Quin és el mamífer més gran del món?",
        respostes: ["Elefant africà", "Balena blava", "Girafa"],
        correcta: "Balena blava"
    },
    {
        pregunta: "Quin és el resultat de 100 dividit entre 4?",
        respostes: ["20", "25", "40"],
        correcta: "25"
    },
    {
        pregunta: "Quina és la capital d'Alemanya?",
        respostes: ["Berlín", "Munic", "Hamburg"],
        correcta: "Berlín"
    },
    {
        pregunta: "Quin gas necessitem per respirar?",
        respostes: ["Oxigen", "Hidrogen", "Heli"],
        correcta: "Oxigen"
    },
    {
        pregunta: "Quants costats té un hexàgon?",
        respostes: ["5", "6", "8"],
        correcta: "6"
    },
    {
        pregunta: "Quin és el riu més llarg d'Europa?",
        respostes: ["Danubi", "Volga", "Tàmesi"],
        correcta: "Volga"
    },
    {
        pregunta: "Quin animal és el més alt del món?",
        respostes: ["Elefant", "Girafa", "Cavall"],
        correcta: "Girafa"
    },
    {
        pregunta: "Quin és el resultat de 9 x 9?",
        respostes: ["72", "81", "99"],
        correcta: "81"
    },
    {
        pregunta: "Quina és la capital de Portugal?",
        respostes: ["Porto", "Lisboa", "Coïmbra"],
        correcta: "Lisboa"
    },
    {
        pregunta: "Quin és l'idioma oficial d'Àustria?",
        respostes: ["Alemany", "Francès", "Italià"],
        correcta: "Alemany"
    },
    {
        pregunta: "Quin planeta té els anells més coneguts?",
        respostes: ["Mart", "Saturn", "Mercuri"],
        correcta: "Saturn"
    },
    {
        pregunta: "Quants dies té un any de traspàs?",
        respostes: ["365", "366", "364"],
        correcta: "366"
    }
];


let casillasEspeciales = [0, 2, 5, 7, 9, 11, 12, 14, 18, 22, 24, 25, 27, 29, 30, 31, 33, 36];
let indicePregunta = 0;
let jugadorPregunta = "";
let estado = "turno";

Preguntas.style.display = "none";
Respuesta1.style.display = "none";
Respuesta2.style.display = "none";
Respuesta3.style.display = "none";

function empezarpreguntas(jugador) {
    jugadorPregunta = jugador;
    estado = "preguntando";

    Preguntas.textContent = "Pregunta para el jugador " + jugador + ": " + preguntes[indicePregunta].pregunta;
    Respuesta1.textContent = preguntes[indicePregunta].respostes[0];
    Respuesta2.textContent = preguntes[indicePregunta].respostes[1];
    Respuesta3.textContent = preguntes[indicePregunta].respostes[2];

    Preguntas.style.display = "block";
    Respuesta1.style.display = "block";
    Respuesta2.style.display = "block";
    Respuesta3.style.display = "block";
}

function cambiarTurno() {
    if (partida.torn === "A") {
        partida.torn = "B";
    } else {
        partida.torn = "A";
    }

    estado = "turno";
    mostrarJSON();
    Preguntas.style.display = "none";
    Respuesta1.style.display = "none";
    Respuesta2.style.display = "none";
    Respuesta3.style.display = "none";
}

let casillasPierdeTurno = [5, 18];
let casillasTiraOtraVez = [31];

let jugadorPierdeTurno = "";
function terminarMovimiento(jugador, esEspecial) {
    if (jugador === "A") {
        partida.jugadors[0].posicio = i;
    } else {
        partida.jugadors[1].posicio = d;
    }

    let casilla;

    if (jugador === "A") {
        casilla = i;
    } else {
        casilla = d;
    }

    if (jugador === "A" && i === 36) {
        partida.guanyador = "A";
    } else if (jugador === "B" && d === 36) {
        partida.guanyador = "B";
    }

    if (partida.guanyador !== null) {
        estado = "terminada";
        Preguntas.style.display = "none";
        Respuesta1.style.display = "none";
        Respuesta2.style.display = "none";
        Respuesta3.style.display = "none";
        nuevaPartida.style.display = "block";
        mostrarJSON();
        return;
    }

    if (!esEspecial) {
        empezarpreguntas(jugador);
        mostrarJSON();
        return;
    }

    Preguntas.style.display = "none";
    Respuesta1.style.display = "none";
    Respuesta2.style.display = "none";
    Respuesta3.style.display = "none";

    if (casillasPierdeTurno.includes(casilla)) {
        jugadorPierdeTurno = jugador;
        cambiarTurno();
    } else if (casillasTiraOtraVez.includes(casilla)) {
        estado = "turno";
        mostrarJSON();
    } else {
        cambiarTurno();
    }
}


function comprobarRespuesta(numero) {
    if (estado !== "preguntando") {
        return;
    }

    if (preguntes[indicePregunta].respostes[numero] === preguntes[indicePregunta].correcta) {
        console.log("Correcte");
    } else {
        console.log("Incorrecte");

        if (jugadorPregunta === "A") {
            i = Math.max(0, i - 1);
            ficha.style.left = posiciones[i].ficha.A.X + "px";
            ficha.style.top = posiciones[i].ficha.A.y + "px";
            partida.jugadors[0].posicio = i;
        } else {
            d = Math.max(0, d - 1);
            fichaB.style.left = posiciones[d].ficha.B.X + "px";
            fichaB.style.top = posiciones[d].ficha.B.y + "px";
            partida.jugadors[1].posicio = d;
        }
    }

    indicePregunta++;
    if (indicePregunta >= preguntes.length) {
        indicePregunta = 0;
    }

    Preguntas.textContent = "";
    Respuesta1.textContent = "";
    Respuesta2.textContent = "";
    Respuesta3.textContent = "";

    cambiarTurno();
}

Respuesta1.addEventListener('click', function() {
    comprobarRespuesta(0);
});

Respuesta2.addEventListener('click', function() {
    comprobarRespuesta(1);
});

Respuesta3.addEventListener('click', function() {
    comprobarRespuesta(2);
});


let posiciones = [
    { casilla: 0, ficha: { A: {X:63, y:-25},  B:{X:90,  y:-25} } },
    { casilla: 1, ficha: { A: {X:70, y:-65},  B:{X:100, y:-65} } },
    { casilla: 2, ficha: { A: {X:75, y:-115}, B:{X:105, y:-120} } },
    { casilla: 3, ficha: { A: {X:80, y:-155}, B:{X:110, y:-165} } },
    { casilla: 4, ficha: { A: {X:85, y:-210}, B:{X:110, y:-210} } },
    { casilla: 5, ficha: { A: {X:90, y:-250}, B:{X:115, y:-250} } },
    { casilla: 6, ficha: { A: {X:100, y:-310}, B:{X:120, y:-320} } },
    { casilla: 7, ficha: { A: {X:160, y:-310}, B:{X:180, y:-320} } },
    { casilla: 8, ficha: { A: {X:220, y:-295}, B:{X:230, y:-320} } },
    { casilla: 9, ficha: { A: {X:265, y:-300}, B:{X:285, y:-320} } },
    { casilla: 10, ficha: { A: {X:310, y:-300}, B:{X:320, y:-320} } },
    { casilla: 11, ficha: { A: {X:355, y:-310}, B:{X:380, y:-320} } },
    { casilla: 12, ficha: { A: {X:410, y:-310}, B:{X:440, y:-300} } },
    { casilla: 13, ficha: { A: {X:420, y:-250}, B:{X:450, y:-250} } },
    { casilla: 14, ficha: { A: {X:435, y:-200}, B:{X:462, y:-190} } },
    { casilla: 15, ficha: { A: {X:430, y:-140}, B:{X:465, y:-130} } },
    { casilla: 16, ficha: { A: {X:450, y:-50}, B:{X:450, y:-95} } },
    { casilla: 17, ficha: { A: {X:375, y:-50}, B:{X:380, y:-95} } },
    { casilla: 18, ficha: { A: {X:300, y:-50}, B:{X:300, y:-95} } },
    { casilla: 19, ficha: { A: {X:225, y:-55}, B:{X:240, y:-90} } },
    { casilla: 20, ficha: { A: {X:155, y:-60}, B:{X:180, y:-90} } },
    { casilla: 21, ficha: { A: {X:138, y:-110}, B:{X:173, y:-130} } },
    { casilla: 22, ficha: { A: {X:140, y:-170}, B:{X:180, y:-180} } },
    { casilla: 23, ficha: { A: {X:150, y:-260}, B:{X:165, y:-230} } },
    { casilla: 24, ficha: { A: {X:200, y:-268}, B:{X:210, y:-243} } },
    { casilla: 25, ficha: { A: {X:260, y:-270}, B:{X:270, y:-245} } },
    { casilla: 26, ficha: { A: {X:320, y:-270}, B:{X:320, y:-243} } },
    { casilla: 27, ficha: { A: {X:385, y:-270}, B:{X:360, y:-250} } },
    { casilla: 28, ficha: { A: {X:365, y:-220}, B:{X:395, y:-220} } },
    { casilla: 29, ficha: { A: {X:365, y:-185}, B:{X:395, y:-185} } },
    { casilla: 30, ficha: { A: {X:385, y:-130}, B:{X:370, y:-150} } },
    { casilla: 31, ficha: { A: {X:310, y:-120}, B:{X:320, y:-150} } },
    { casilla: 32, ficha: { A: {X:260, y:-120}, B:{X:265, y:-150} } },
    { casilla: 33, ficha: { A: {X:200, y:-130}, B:{X:230, y:-150} } },
    { casilla: 34, ficha: { A: {X:200, y:-205}, B:{X:225, y:-205} } },
    { casilla: 35, ficha: { A: {X:260, y:-185}, B:{X:265, y:-210} } },
    { casilla: 36, ficha: { A: {X:320, y:-185}, B:{X:320, y:-210} } },
];


let i = posiciones.findIndex(p => p.casilla === 0);
ficha.style.left = posiciones[i].ficha.A.X + "px";
ficha.style.top = posiciones[i].ficha.A.y + "px";

let d = posiciones.findIndex(p => p.casilla === 0);
fichaB.style.left = posiciones[d].ficha.B.X + "px";
fichaB.style.top = posiciones[d].ficha.B.y + "px";

ficha.style.transition = "left 1s ease, top 1s ease";
fichaB.style.transition = "left 1s ease, top 1s ease";


let partida = {
    torn: 'A',
    jugadors: [
        { nom: 'A', posicio: 0 },
        { nom: 'B', posicio: 0 }
    ],
    guanyador: null,
    ultimaTirada: null
};

let partidaGuardada = localStorage.getItem("partidaOca");

if (partidaGuardada) {
    let datos = JSON.parse(partidaGuardada);

    partida = datos.partida;
    i = datos.i;
    d = datos.d;
    indicePregunta = datos.indicePregunta;
    estado = datos.estado;
    jugadorPregunta = datos.jugadorPregunta;
}

ficha.style.left = posiciones[i].ficha.A.X + "px";
ficha.style.top = posiciones[i].ficha.A.y + "px";
fichaB.style.left = posiciones[d].ficha.B.X + "px";
fichaB.style.top = posiciones[d].ficha.B.y + "px";


let tirarDau = () => {
    if (estado !== "turno" || partida.torn !== "A") {
        return;
    }

    if (jugadorPierdeTurno === "A") {
        jugadorPierdeTurno = "";
        cambiarTurno();
        return;
    }

    let valordado = Math.floor(Math.random() * 6) + 1;
    console.log(valordado);
    partida.ultimaTirada = valordado;

    let destino = i + valordado;

    if (destino >= posiciones.length) {
        console.log(`El número suma más que 36, tira otra vez, está invalidado!`);
        mostrarJSON();
        return;
    }

    estado = "moviendo";
    let esEspecial = casillasEspeciales.includes(destino);

    function moverFicha() {
        if (i < destino) {
            i++;
            ficha.style.left = posiciones[i].ficha.A.X + "px";
            ficha.style.top = posiciones[i].ficha.A.y + "px";
            setTimeout(moverFicha, 500);
        } else {
            if (i == 2) {
                destino = 21;
                console.log(`Has caído en la casilla 2, así que vas a la 21`);
            } else if (i == 7) {
                destino = 11;
                console.log(`Has caído en la casilla 7, así que vas a la 11`);
            } else if (i == 22) {
                destino = 24;
                console.log(`Has caído en la casilla 22, así que vas a la 24`);
            } else if (i == 14) {
                destino = 29;
                console.log(`Has caído en la casilla 14, así que vas a la 29`);
            } else if (i == 30) {
                destino = 27;
                console.log(`Has caído en la casilla 30, así que vas a la 27`);
            } else if (i == 25) {
                destino = 9;
                console.log(`Has caído en la casilla 25, así que vas a la 9`);
            } else if (i == 12) {
                destino = 0;
                console.log(`Has caído en la casilla 12, así que vuelves al inicio`);
            } else if (i == 33) {
                destino = 20;
                console.log(`Has caído en la casilla 33, así que vas a la 20`);
            }

            if (i != destino) {
                setTimeout(function() {
                    i = destino;
                    ficha.style.left = posiciones[i].ficha.A.X + "px";
                    ficha.style.top = posiciones[i].ficha.A.y + "px";
                    terminarMovimiento("A", esEspecial);
                }, 500);
            } else {
                ficha.style.left = posiciones[i].ficha.A.X + "px";
                ficha.style.top = posiciones[i].ficha.A.y + "px";
                terminarMovimiento("A", esEspecial);
            }
        }
    }

    moverFicha();
};


avanzardado1.addEventListener('click', tirarDau);


let tirarDau2 = () => {
    if (estado !== "turno" || partida.torn !== "B") {
        return;
    }

    if (jugadorPierdeTurno === "B") {
        jugadorPierdeTurno = "";
        cambiarTurno();
        return;
    }

    let valordado = Math.floor(Math.random() * 6) + 1;
    console.log(valordado);
    partida.ultimaTirada = valordado;

    let destino = d + valordado;

    if (destino >= posiciones.length) {
        console.log(`El número suma más que 36, tira otra vez, está invalidado!`);
        mostrarJSON();
        return;
    }

    estado = "moviendo";
    let esEspecial = casillasEspeciales.includes(destino);

    function moverFicha() {
        if (d < destino) {
            d++;
            fichaB.style.left = posiciones[d].ficha.B.X + "px";
            fichaB.style.top = posiciones[d].ficha.B.y + "px";
            setTimeout(moverFicha, 500);
        } else {
            if (d == 2) {
                destino = 21;
                console.log(`Has caído en la casilla 2, así que vas a la 21`);
            } else if (d == 7) {
                destino = 11;
                console.log(`Has caído en la casilla 7, así que vas a la 11`);
            } else if (d == 22) {
                destino = 24;
                console.log(`Has caído en la casilla 22, así que vas a la 24`);
            } else if (d == 14) {
                destino = 29;
                console.log(`Has caído en la casilla 14, así que vas a la 29`);
            } else if (d == 30) {
                destino = 27;
                console.log(`Has caído en la casilla 30, así que vas a la 27`);
            } else if (d == 25) {
                destino = 9;
                console.log(`Has caído en la casilla 25, así que vas a la 9`);
            } else if (d == 12) {
                destino = 0;
                console.log(`Has caído en la casilla 12, así que vuelves al inicio`);
            } else if (d == 33) {
                destino = 20;
                console.log(`Has caído en la casilla 12, así que vuelves al inicio`);
            }

            if (d != destino) {
                setTimeout(function() {
                    d = destino;
                    fichaB.style.left = posiciones[d].ficha.B.X + "px";
                    fichaB.style.top = posiciones[d].ficha.B.y + "px";
                    terminarMovimiento("B", esEspecial);
                }, 500);
            } else {
                fichaB.style.left = posiciones[d].ficha.B.X + "px";
                fichaB.style.top = posiciones[d].ficha.B.y + "px";
                terminarMovimiento("B", esEspecial);
            }
        }
    }

    moverFicha();
};

avanzardado2.addEventListener('click', tirarDau2);



console.log(posiciones);


let panelJSON = document.querySelector('#panel-json');

function mostrarJSON() {
    panelJSON.textContent = JSON.stringify(partida, null, 2);

    localStorage.setItem("partidaOca", JSON.stringify({
        partida: partida,
        i: i,
        d: d,
        indicePregunta: indicePregunta,
        estado: estado,
        jugadorPregunta: jugadorPregunta
    }));
}

if (panelJSON) {
    mostrarJSON();
}