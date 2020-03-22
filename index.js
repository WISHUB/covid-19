// Ambos valores son casos totales
function get_factor_riesgo(infectados_ayer, infectados_hoy) {
    /**
     *  Este resultado depende de la probabilidad de contagio
     *  y de el nivel de exposición de la sociedad. 
     */
    return parseFloat(infectados_hoy / infectados_ayer);
}

// Ambos valores son casos totales
function get_nuevos_infectados(infectados_ayer, infectados_hoy) {
    /**
     *  El FACTOR_RIESGO es muy importante, y sería deseable que valga cerca de 1
     *  para que no haya nuevos casos.
     */
    const FACTOR_RIESGO = get_factor_riesgo(infectados_ayer, infectados_hoy);
    let nuevos_infectados = infectados_hoy * FACTOR_RIESGO;

    return parseInt(nuevos_infectados, 10);
}

console.log({ riesgo: get_factor_riesgo(158, 225) });

// let total = 0;
// for (let i = 1; i < 15; i++) {
//   total += get_nuevos_infectados(128, 158);
// }

console.log(get_nuevos_infectados(158, 225));