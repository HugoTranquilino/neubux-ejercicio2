function capturar() {

    var m_jugador1 = parseInt(document.getElementById("puntuacion_jugador1").value);
    var m_jugador2 = parseInt(document.getElementById("puntuacion_jugador2").value);
    num_rondas = document.getElementById("numero_rondas").value;
    var ganador;
    var ventaja;

    if (m_jugador1 > m_jugador2) {
        ganador = 'jugador 1';
        ventaja = (m_jugador1 - m_jugador2);
    } else {
        ganador = 'jugador 2';
        ventaja = (m_jugador2 - m_jugador1);
    }

    function marcador(puntuacion_jugador1, puntuacion_jugador2) {
        this.puntuacion_jugador1 = puntuacion_jugador1;
        this.puntuacion_jugador2 = puntuacion_jugador2;
        this.lider = ganador;
        this.ventaja = ventaja;
    }

    ronda = new marcador(m_jugador1, m_jugador2, ganador, ventaja);

    registrarMarcador();
}

var marcador = [];
var x = 0;

function registrarMarcador() {
    let contador = ++x;
    if (contador <= num_rondas) {
        marcador.push(ronda);

        document.getElementById('mostrar_resultados').innerHTML += `
            <tbody>
                <td>${contador}</td>
                <td>${ronda.puntuacion_jugador1}</td>
                <td>${ronda.puntuacion_jugador2}</td>
                <td>${ronda.lider}</td>
                <td>${ronda.ventaja}</td>
            </tbody>
        `;
    } else {
        console.log('finaliza');
        var t_ventajas = [];

        // disable button
        const btn_add = document.getElementById("agregar");
        btn_add.disabled = true;

        // get the max value 
        for (let i = 0; i < marcador.length; i++) {
            var item_v = marcador[i].ventaja;
            t_ventajas.push(item_v);
        }

        let max_value = Math.max(...t_ventajas)

        var winner = marcador.filter(function (marcador) {
            return marcador.ventaja == max_value;
        })

        document.getElementById('final').innerHTML += `
            <label for="ganador">Ganador ${winner[0].lider}</label>
            <label for="ventaja">Ventaja ${winner[0].ventaja}</label>
        `;
    }
}


// $(document).ready(function() {
//     $('#mostrar_resultados').DataTable(
//         {
//             "bPaginate": false,
//             "bFilter": false,
//             "bInfo": false
//         }
//     );
// } );