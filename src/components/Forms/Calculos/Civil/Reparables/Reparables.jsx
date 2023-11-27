import React, { useState } from "react";
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import Loader from "../../../../Loader/Loader.jsx";
import useFormValidation from "../../../../../hooks/useFormValidation.js";
import Cash from "../../../../../assets/icons/Cash";
import User from "../../../../../assets/icons/User";
import {SolarCalendarMinimalisticBoldDuotone} from "../../../../../assets/icons/Calendar";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils.js";
import { IconoirPercentageCircleSolid } from "../../../../../assets/icons/Maths.jsx";

export default function Reparable () {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const { handleInputChange, validateSubmit, handleChecked } = useFormValidation(errors, setErrors, form, setForm);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validate = validateSubmit(event);
        if( Object.keys(validate).length === 0 ) {
            deleteObjectEmptyStrings(form)
            console.log('hacer calculo')
            // setLoading(true);
            // setTimeout(() => {
            //     console.log(form);
            //     setLoading(false);
            //   }, 10000);
        }else{
            console.log('quedan campos que completar')
        }
    }

    return (
        <div className="w-full h-full relative">
        <Loader loading={loading}/>
        <Divider className="mt-3 mb-5"/>
        <form noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center">
            <div className="flex mt-3 justify-center">
                    <Input 
                    startContent={
                    <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="text" 
                    label="Cuantía del daño" 
                    isRequired
                    labelPlacement="outside" 
                    name="remuneracion" 
                    className="fv max-w-xs" 
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    color={errors.remuneracion  ? 'danger' : 'default'}
                    errorMessage={errors.remuneracion}
                    />
                </div>
                <div className="flex mt-3 justify-center">
                    <Input 
                    startContent={
                    <IconoirPercentageCircleSolid className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="text" 
                    label="Probabilidad de condena por daños y perjuicios"
                    isRequired
                    labelPlacement="outside" 
                    name="probabilidadDsPs" 
                    className="fv max-w-xs" 
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    color={errors.probabilidadDsPs  ? 'danger' : 'default'}
                    errorMessage={errors.probabilidadDsPs}
                    />
                </div>
                <div className="flex mt-3 justify-center">
                    <Input 
                    startContent={
                    <IconoirPercentageCircleSolid className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="text" 
                    label="Probabilidad de condena por daños punitorios"
                    isRequired
                    labelPlacement="outside" 
                    name="probabilidadPunitorios" 
                    className="fv max-w-xs" 
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    color={errors.probabilidadPunitorios  ? 'danger' : 'default'}
                    errorMessage={errors.probabilidadPunitorios}
                    />
                </div>
            </div>
            <Divider className="mt-3 mb-5"/>
            <div className="flex justify-end">
            <div className="mr-2">
            <Button>Borrar</Button>
            </div>
            <div>
            <Button type="submit" onSubmit={handleSubmit} >Calcular</Button>
            </div>
        </div>
        </form>

        </div>
    )
};