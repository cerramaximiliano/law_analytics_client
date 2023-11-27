import moment from 'moment';

const useFormValidationLiquidacion = (setErrors, setIsValid, isValid) => {
    const numericRegex = /^[1-9]\d*(\.\d+)?$/;
    const integerRegex = /^[1-9]\d*$/;

    const validateInput = (name, value, otherValues = {}) => {
        switch (name) {
            case 'fechaIngreso':
            case 'fechaEgreso':
                const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
                if (!value.trim()) {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Campo requerido' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: false }));
                } else if (!dateRegex.test(value)) {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Formato de fecha incorrecto' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: false }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: true }));
                    // Validación de fechas entre sí con Moment.js
                    if (otherValues.isAfter && otherValues.otherValue) {
                        const isAfter = moment(value, 'DD/MM/YYYY').isSameOrAfter(
                            moment(otherValues.otherValue, 'DD/MM/YYYY')
                        );
                        if(name === 'fechaFalsa') {
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                [name]: isAfter ? 'La fecha debe ser anterior a Fecha Ingreso' : '',
                            }));
                        }else {
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                [name]: isAfter ? 'La fecha debe ser anterior a Fecha Egreso' : '',
                            }));
                        }
                        setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: !isAfter }));
                    } else if (otherValues.isBefore && otherValues.otherValue) {
                        const isBefore = moment(value, 'DD/MM/YYYY').isSameOrBefore(
                            moment(otherValues.otherValue, 'DD/MM/YYYY')
                        );
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            [name]: isBefore ? 'La fecha debe ser posterior a Fecha Ingreso' : '',
                        }));
                        setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: !isBefore }));
                    }
                    if (name === 'fechaFalsa' && !otherValues.otherValue) {
                        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Indique una fecha de ingreso' }));
                        setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: false }));
                    }
                }
                break;
            case 'remuneracion':
                if (!value.trim()) {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Campo requerido' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: false }));
                } else if (!numericRegex.test(value)) {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Formato numérico incorrecto. Utilice 00.00' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: false }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: true }));
                }
                break;
            case 'salarioProximo':
                if (!value.trim()) {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Campo requerido' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: false }));
                } else if (!numericRegex.test(value)) {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Formato numérico incorrecto. Utilice 00.00' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: false }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
                    setIsValid((prevIsValid) => ({ ...prevIsValid, [name]: true }));
                }
                break;
            default:
                break;
        }
    };

    const handleInputChange = (event, otherValues) => {
        const { name, value } = event.target;
        validateInput(name, value, otherValues);
    };

    const validateSubmit = (event) => {
        event.preventDefault();
        const inputs = Array.from(event.target);
        console.log(inputs)
        inputs.forEach((input) => {
            let {name, value} = input;
            console.log(name, value)
            validateInput(name, value);
        });
        const isAnyInvalid = Object.values(isValid).includes(false);
        return isAnyInvalid;
    };

    return { handleInputChange, validateSubmit };
};

export default useFormValidationLiquidacion;
