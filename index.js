class Covid {

    casos
    infectados_ayer
    infectados_hoy

    constructor(casos = [], infectados_hoy = undefined) {
        this.casos = casos
        this.infectados_ayer = this.casos.length ? this.casos[this.casos.length - 1] : 0
        this.infectados_hoy = infectados_hoy
    }

    get factores_de_riesgo() {
        return this.casos.map((numero_casos, index) => {
            if (index === this.casos.length - 1)
                return this.infectados_hoy ? this.infectados_hoy / numero_casos : 1
            else
                return this.casos[index + 1] / numero_casos
        })
    }

    get promedio_factores_de_riesgo() {

        const factores_length = this.factores_de_riesgo.length
        const suma_factores_de_riesgo = this.factores_de_riesgo
            .reduce((total, factor_riesgo) => total += factor_riesgo)

        return factores_length ? suma_factores_de_riesgo / factores_length : 0
    }

    get nuevos_infectados() {
        return !this.infectados_hoy ?
            Math.round(this.infectados_ayer * this.promedio_factores_de_riesgo) :
            Math.round(this.infectados_hoy * this.promedio_factores_de_riesgo)
    }
}