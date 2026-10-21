let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad() {
    let valor = document.getElementById("edad").value;
    let edad = parseInt(valor);

    if (isNaN(edad)) {
        alert("Ingresa una edad válida");
        return;
    }

    edadesIzquierda.push(edad);
    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let filas = "";
    for (let i = 0; i < edadesIzquierda.length; i++) {
        filas += "<tr>";
        filas += "<td>" + edadesIzquierda[i] + "</td>";
        filas += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button></td>";
        filas += "<td><button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button></td>";
        filas += "</tr>";
    }
    document.getElementById("tablaIzquierda").innerHTML = filas;
}

function pintarArregloDerecha() {
    let filas = "";
    for (let i = 0; i < edadesDerecha.length; i++) {
        filas += "<tr>";
        filas += "<td><button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button></td>";
        filas += "<td>" + edadesDerecha[i] + "</td>";
        filas += "<td><button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button></td>";
        filas += "</tr>";
    }
    document.getElementById("tablaDerecha").innerHTML = filas;
}

function eliminarIzquierdo(indice) {
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
}

function eliminarDerecho(indice) {
    edadesDerecha.splice(indice, 1);
    pintarArregloDerecha();
}

function moverHaciaDerecha(indice) {
    let edad = edadesIzquierda[indice];
    edadesDerecha.push(edad);
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice) {
    let edad = edadesDerecha[indice];
    edadesIzquierda.push(edad);
    edadesDerecha.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}



