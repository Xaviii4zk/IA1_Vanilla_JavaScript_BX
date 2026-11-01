
/* EJERCICIO 1: Variables y constantes */

let nomJugador = document.querySelector('#nomJugador');
let maxTirades = document.querySelector('#MAX_TIRADES');

const MAX_TIRADES = 10;

nomJugador.textContent = 'Anna';
maxTirades.textContent = MAX_TIRADES;
nomJugador.textContent = 'Marc';


/* EJERCICIO 2: Funciones de suma y multiplicación */

let a = 2;
let b = 3;

function suma(a, b) {
    return a + b;
}

function mutliplicar(a, b) {
    return a * b;
}

let texto = document.querySelector('#ResultadoSuma');
let texto2 = document.querySelector('#ResultadoMulti');
let botonsuma = document.querySelector('#LlamarFuncion');
let botonmultiplicar = document.querySelector('#botonmultiplicar');

botonsuma.addEventListener('click', function() {
    texto.textContent = suma(a, b);
});

botonmultiplicar.addEventListener('click', function() {
    texto2.textContent = mutliplicar(a, b);
});


/* EJERCICIO 3: Condicionales y operador ternario */

let inputnum = document.querySelector('#inputnum');
let textoaviso = document.querySelector('#textoaviso');

inputnum.addEventListener('change', function() {
    let numero = Number(inputnum.value);

    if (numero < 0) {
        textoaviso.textContent = 'El número no puede ser negativo';
    } else if (numero <= 10) {
        textoaviso.textContent = numero === 0 ? 'Has escrito cero' : 'Tabla de multiplicar del ' + numero;

        let tabla = '';

        for (let i = 1; i <= 10; i++) {
            tabla += numero + ' x ' + i + ' = ' + (numero * i) + '\n';
        }

        textoaviso.textContent += '\n' + tabla;
    } else {
        textoaviso.textContent = 'El número no puede ser mayor que 10';
    }
});


/* EJERCICIO 4: Switch */

let estat = 'inici';
let texto3 = '';

switch (estat) {
    case 'inici':
        texto3 = 'La partida ha comenzado';
        break;
    case 'turnoA':
        texto3 = 'Es el turno del jugador A';
        break;
    case 'turnoB':
        texto3 = 'Es el turno del jugador B';
        break;
    case 'final':
        texto3 = 'La partida ha terminado';
        break;
    default:
        texto3 = 'Estado no válido';
}

console.log(texto3);


/* EJERCICIO 5: Modificar el DOM y las clases CSS */

let Nom = document.querySelector('#Nom');

botonsuma.addEventListener('click', function() {
    Nom.classList.toggle('jugadors');
});


/* EJERCICIO 6: Lanzar un dado */

let lanzardado = document.querySelector('#lanzardado');
let mostrarmissatge = document.querySelector('#mostrarmissatge');

function lanzardados() {
    let valorDau = Math.floor(Math.random() * 6) + 1;
    mostrarmissatge.textContent = 'Has tret un ' + valorDau;
}

lanzardado.addEventListener('click', lanzardados);


/* EJERCICIO 7: Formulario para recoger el nombre */

let inputNombre = document.querySelector('#inputNombre');
let formulario1 = document.querySelector('#formulario1');

formulario1.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(`El nombre del jugador es: ${inputNombre.value}`);
});


/* EJERCICIO 8: Arrays e índices */

let caselles = ['Start', 'Poble', 'Pont', 'Casa', 'Bosc', 'Mola', 'Final'];

let tirada = 3;
let nomCasella = caselles[tirada];

console.log(nomCasella);


/* EJERCICIO 9: Preguntas y respuestas */

let Preguntas = document.querySelector('.Preguntas');
let Respuesta1 = document.querySelector('.Respuesta1');
let Respuesta2 = document.querySelector('.Respuesta2');
let Respuesta3 = document.querySelector('.Respuesta3');
let nuevaPartida = document.querySelector("#nuevaPartida");


let i = -1;
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
    }
];

function empezarpreguntas() {
    i++;

    if (i >= preguntes.length) {
        Preguntas.textContent = 'No quedan más preguntas';
        Respuesta1.textContent = '';
        Respuesta2.textContent = '';
        Respuesta3.textContent = '';
        return;
    }

    Preguntas.textContent = preguntes[i].pregunta;
    Respuesta1.textContent = preguntes[i].respostes[0];
    Respuesta2.textContent = preguntes[i].respostes[1];
    Respuesta3.textContent = preguntes[i].respostes[2];
}

function comprobarRespuesta(numero) {
    if (preguntes[i].correcta === numero) {
        console.log('Correcte');
    } else {
        console.log('Incorrecte');
    }
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
empezarpreguntas();

/* EJERCICIO 10: Crear y recorrer un array de casillas */

let casellesN = [];

for (let i = 0; i <= 20; i++) {
    casellesN.push(i);
}

for (let i = 0; i < casellesN.length; i++) {
    console.log(casellesN[i]);
}


/* EJERCICIO 11: Objetos y propiedades */

let jugadorA = {
    nom: 'A',
    posicio: 0,
    activat: true
};

console.log(jugadorA.nom);
console.log(jugadorA.posicio);

jugadorA.posicio = 3;

console.log(jugadorA.posicio);


/* EJERCICIO 12: Función flecha para lanzar un dado */

let Dado2 = document.querySelector('#Dado2');

let tirarDau = () => {
    let valorDau = Math.floor(Math.random() * 6) + 1;
    return valorDau;
};

Dado2.addEventListener('click', function() {
    console.log(tirarDau());
});


/* EJERCICIO 13: Template literals, trim y toUpperCase */

function mostrarmissatgeNombre() {
    let nomJugador = inputNombre.value.trim().toUpperCase();
    let missatge = `El jugador ${nomJugador} ha començat la partida`;

    console.log(missatge);
}


/* EJERCICIO 14: Mostrar la fecha actual */

let FechaActual = new Date();

let FechaVerdadera = FechaActual.toLocaleDateString('es-ES');

console.log(`Partida iniciada el ${FechaVerdadera}`);


/* EJERCICIO 15: Casillas especiales */

let CasellesEspecials = {
    4: 9,
    11: 0,
    16: -1
};

let casilla = 4;
let posicio = casilla;

if (CasellesEspecials[casilla] !== undefined) {
    if (casilla === 16) {
        console.log('Pierdes un turno');
    } else {
        posicio = CasellesEspecials[casilla];
        console.log(`Nueva posición: ${posicio}`);
    }
}


/* EJERCICIO 16: Crear un tablero con casillas y fichas */

let tablero = [];

for (let i = 0; i <= 37; i++) {
    tablero.push({
        casilla: i,
        ficha: {
            A: { x: 0, y: 0 },
            B: { x: 0, y: 0 }
        }
    });
}

console.log(tablero);


/* EJERCICIO 17: Convertir un objeto a JSON */

let partida = {
    torn: 'A',
    jugadors: [
        { nom: 'A', posicio: 0 },
        { nom: 'B', posicio: 0 }
    ],
    guanyador: null,
    ultimaTirada: null
};

let panelJSON = document.querySelector('#panel-json');

function mostrarJSON() {
    panelJSON.textContent = JSON.stringify(partida, null, 2);
}

if (panelJSON) {
    mostrarJSON();
}