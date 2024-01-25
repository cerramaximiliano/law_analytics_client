

class Calculo {
    constructor({
      reclamante = null,
      reclamado = null,
      fechaIngreso,
      fechaEgreso,
      remuneracion,
      otrasSumas,
      incluirSAC = false,
      liquidacionFinal = false,
      salarioLiquidacion,
      salarioProximo,
      preavisoLiquidacion, 
      integracionLiquidacion,
      sacLiquidacion,
      sacPreavisoLiquidacion,
      diasLiquidacion,
      vacacionesLiquidacion,
      topes = false,
      torrisiIndeminizacion,
      vizzotiIndeminacion,
      salarioTope,
      indemnizacionAgravada = false,
      indemnizacionDoble,
      indemnizacionEmbarazo,
      multas = false,
      multaArt1,
      multaArt2, 
      multaArt15,
      multaArt80,
      salarioMultas,
      fechaFalsa,
      salarioFalso,
      indemnizacionRegimen

    }) {
      this.reclamante = reclamante;
      this.reclamado = reclamado;
      this.fechaIngreso = fechaIngreso;
      this.fechaEgreso = fechaEgreso;
      this.remuneracion = Number(remuneracion);
      this.otrasSumas = Number(otrasSumas) || null;
      this.incluirSAC = incluirSAC;
      this.liquidacionFinal = liquidacionFinal;
      this.liquidacionFinalObject = {
        salarioProximo: salarioLiquidacion && Number(salarioProximo) || null,
        preavisoLiquidacion, 
        integracionLiquidacion,
        sacLiquidacion,
        sacPreavisoLiquidacion,
        diasLiquidacion,
        vacacionesLiquidacion
      };
      this.topes = topes;
      this.topesObject = {
        torrisiIndeminizacion,
        vizzotiIndeminacion,
        salarioTope: topes && Number(salarioTope) || null,
      }
      this.multas = multas;
      this.multasObject = {
        multaArt1,  
        multaArt2,
        multaArt15,
        multaArt80,
        salarioMultas: multas && Number(salarioMultas),
        fechaFalsa,
        salarioFalso: multas && Number(salarioFalso),
        indemnizacionRegimen
      }
      this.indemnizacionAgravada = indemnizacionAgravada;
      this.indemnizacionAgravadaObject = {
        indemnizacionDoble,
        indemnizacionEmbarazo,
      }
      this.results = [];
    }


  }


export {Calculo};
