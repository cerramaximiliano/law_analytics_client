import moment from 'moment';
import { deleteObjectEmptyStrings } from '../utils/objectUtils';

const useFormValidation = (errors, setErrors, form, setForm, compareValue1, compareValue2) => {
    const numericRegex = /^[1-9]\d*(\.\d+)?$/;
    const integerRegex = /^[1-9]\d*$/;
    const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const validateInput = (name, value, otherValues = {}) => {
        switch (name) {
            case 'fechaIngreso':
            case 'fechaEgreso':
            case 'fechaFalsa':
                if (!value.trim()) {
                    return {[name]: 'Campo requerido'}
                } else if (!dateRegex.test(value)) {
                    return {[name]: 'Formato de fecha incorrecto'}
                } else {
                    if ( name === 'fechaIngreso' && moment(value, 'DD/MM/YYYY').isSameOrAfter(moment(compareValue2, 'DD/MM/YYYY')) ) return {[name]: 'La fecha debe ser anterior a la fecha de egreso'}
                    if ( name === 'fechaEgreso' && moment(value, 'DD/MM/YYYY').isSameOrBefore(moment(compareValue1, 'DD/MM/YYYY')) ) return {[name]: 'La fecha debe ser posterior a la fecha de ingreso'}
                    return {[name]: ''}
                }
                break;
            case 'fechaRenuncia':
                if (!value.trim()) {
                    return {[name]: 'Campo requerido'}
                } else if (!dateRegex.test(value)) {
                    return {[name]: 'Formato de fecha incorrecto'}
                }else{
                    return {[name]: ''}
                }
            case 'remuneracion':
            case 'salarioFalso':
            case 'salarioMultas':
            case 'nivelPrecaucion':
            case 'ingresoMaximo':
            case 'ingresoReal':
            case 'patrimonioReclamado':
            case 'patrimonioReclamante':
            case 'patrimonioFinalReclamado':
            case 'patrimonioFinalReclamante':
            case 'valorLocativo':
            case 'ingresosTotales':
                if (!value.trim()) {
                    return {[name]: 'Campo requerido'}
                } else if (!numericRegex.test(value)) {
                    return {[name]: 'Formato numérico incorrecto. Utilice 00.00'}
                } else {
                    return {[name]: ''}
                }
                break;
            case 'mesesViviendaFamiliar':
            case 'cantidadHijos':
            case 'cantidadFamiliares':
                if(!value.trim()){
                    return {[name]: 'Campo requerido'}
                }else if(!integerRegex.test(value)){
                    return {[name]: 'Formato numérico incorrecto. Utilice número positivo'}
                }else{
                    return {[name]: ''}
                }
            case 'otrasSumas':
                if (!value.trim()) {
                    return {[name]: ''}
                }else if (!numericRegex.test(value)) {
                    return {[name]: 'Formato numérico incorrecto. Utilice 00.00' }
                } else {
                    return {[name]: ''}
                }
                break;
            case 'dias':
                if (!value.trim()) {
                    return {[name]: ''}
                }else if (!integerRegex.test(value)) {
                    return {[name]: 'Formato numérico incorrecto. Utilice número positivo'}
                } else {
                    return {[name]: ''}
                }
                break;
            case 'salarioProximo':
                if (!value.trim()) {
                    return {[name]: 'Campo requerido'}
                } else if (!numericRegex.test(value)) {
                    return {[name]: 'Formato numérico incorrecto. Utilice 00.00'}
                } else {
                    return {[name]: ''}
                }
                break;
            case 'salarioTope':
                if (!value.trim()) {
                    return {[name]: 'Campo requerido'}
                } else if (!numericRegex.test(value)) {
                    return {[name]: 'Formato numérico incorrecto. Utilice 00.00'}
                } else {
                    return {[name]: ''}
                }
                break
            case 'ingresosMensuales':
                if(value == 0) return {[name]: 'Debe elegir una opción'}
                else return {[name]: ''}
                break
            case 'tasaDeInteres':
                if(value ==0) return {[name]: 'Debe elegir una tasa de interés'}
                else return {[name]: ''}
                break
            case 'probabilidadDsPs':
            case 'probabilidadPunitorios':
            case 'probabilidadOcurrenciaDs':
            case 'nivelPrecaucionMinimo':
            case 'tasaDescuento':
            case 'probabilidadCapacitacion':
            case 'probabilidadIngreso':
            case 'probabilidadIngresoReal':
            case 'cuotaParte':
            case 'porcentajeIncapacidad':
                if(!value.trim()){
                    return {[name]: 'Campo requerido'}
                }else if(!numericRegex.test(value) || value > 100){
                    return {[name]: 'Formato numérico incorrecto. Utilice valores entre 0 y 100'}
                }else {
                    return {[name]: ''}
                }
                break
            case 'edadDisolucion':
            case 'edadLimite':
            case 'edadAccidente':
            case 'edadFinal':
                if(!value.trim()){
                    return {[name]: 'Campo requerido'}
                }else if (name === 'edadDisolucion' && Number(value) > Number(compareValue2)){
                    return {[name]: 'La edad de disolución debe ser menor a la edad límite'}
                }else if(name === 'edadLimite' && value < compareValue1){
                    return {[name]: 'La edad de límite debe ser mayor a la edad de disolución'}
                }else if(name === 'edadAccidente' && value > compareValue2){
                    return {[name]: 'La edad del accidente debe ser inferior a la edad final'}
                }else if(name === 'edadLimite' && value < compareValue1){
                    return {[name]: 'La edad final debe ser mayor a la edad del accidente'}
                }else{
                    return {[name]: ''}
                }

                break

            case 'destinatario':
            case 'actividadDestinatario':
            case 'cuitDestinatario':
            case 'domicilioDestinatario':
            case 'cpDestinatario':
            case 'remitente':
            case 'dniRemitente':
            case 'cuilRemitente':
            case 'domicilioRemitente':
            case 'cpRemitente':
            case 'textTelegrama':
                if(!value.trim()){
                    return {[name]: 'Campo requerido'}
                }else{
                    return {[name]: ''}
                }
            default:
                break;
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const validate = validateInput(name, value);
        setErrors({...errors, ...validate})
        setForm({...form, [name]: value })
    };

    const handleChecked = (event) => {
        const {name, checked} = event.target;
        setForm({...form, [name]: checked})
    }

    const validateSubmit = (event) => {
        const inputs = Array.from(event.target);
        let errorsInput = {};
        inputs.forEach((input) => {
            let { name, value } = input;
            const validation = validateInput(name, value);
            errorsInput = {...errorsInput, ...validation}
        });
        deleteObjectEmptyStrings(errorsInput);
        setErrors(errorsInput);
        return errorsInput;
    };

    
    return { handleInputChange, validateSubmit, handleChecked };
};

export default useFormValidation;
