class Covid {

    casos
    infectados_ayer
    infectados_hoy

    constructor(casos = [], infectados_hoy = undefined) {
        this.casos = casos
        this.infectados_ayer = this.casos.slice(-1)
        this.infectados_hoy = infectados_hoy
    }
  
    get factores_de_riesgo() {
        return this.casos.map((caso, index) => {
            if (index === this.casos.length - 1)
                return this.infectados_hoy ? this.infectados_hoy / caso : 0
            else
                return this.casos[index + 1] / caso
        })
    }

    get promedio_factores_de_riesgo() {
        return this.factores_de_riesgo.reduce((anterior, actual) => actual += anterior)
    }

    get factor_riesgo_global() {
      return this.promedio_factores_de_riesgo / this.casos.length
    }

    get nuevos_infectados() {
        return !this.infectados_hoy
            ? Math.round(this.infectados_ayer * this.factor_riesgo_global)
            : Math.round(this.infectados_hoy * this.factor_riesgo_global)
    }
}

const casos = [
    12,
    17,
    19,
    21,
    31,
    34,
    45,
    56,
    65,
    79,
    98,
    128,
    158,
    225
]

const covid = new Covid(casos)

console.log({ nuevos_infectados: covid.nuevos_infectados })