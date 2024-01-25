import moment from 'moment';
import { numberWithCommas } from '../utils/formatUtils';


const periodo = (fechaInicio, fechaFin, diasDescuento, fraccion) => {
    const fechaDesde = moment(fechaInicio, 'DD/MM/YYYY');
    const fechaHasta = (moment(fechaFin,'DD/MM/YYYY')).subtract(diasDescuento, 'days');
    const diferenciaMeses = fechaHasta.diff(fechaDesde, 'months');
    let periodoCalculo = Math.floor(diferenciaMeses / 12);
    const fraccionD = diferenciaMeses - (periodoCalculo * 12)
    const fraccionTope = fraccion || 3;
    fraccionD > fraccionTope ? periodoCalculo += 1 : false;
    return periodoCalculo;
};

const indemnizacion = (periodo, remuneracion) => {
    const indemResult = periodo * remuneracion;
    return indemResult;
};


export {indemnizacion, periodo};