import React, { useState } from "react";
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Loader from "../../../../Loader/Loader.jsx";
import useFormValidation from "../../../../../hooks/useFormValidation.js";
import Cash from "../../../../../assets/icons/Cash.jsx";
import {SolarCalendarMinimalisticBoldDuotone} from "../../../../../assets/icons/Calendar.jsx";
import { IconoirPercentageCircleSolid, SolarHashtagSquareBoldDuotone } from "../../../../../assets/icons/Maths.jsx";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils.js";

export default function Danos ({type}){
    console.log(type)
    const [parent, enableAnimations] = useAutoAnimate();

    const [edadAccidente, setEdadAccidente] = useState();
    const [edadFinal, setEdadFinal] = useState();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const { handleInputChange, validateSubmit } = useFormValidation(errors, setErrors, form, setForm, edadAccidente, edadFinal);

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
        <div className="flex gap-[4%]   max-md:flex-col">
        <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                                <Input 
                                startContent={
                                <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.ingresosTotales}
                                label="Ingresos totales anuales" 
                                isRequired
                                labelPlacement="outside" 
                                name="ingresosTotales" 
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.ingresosTotales  ? 'danger' : 'default'}
                                errorMessage={errors.ingresosTotales}
                                />
                    </div>
                    <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                                <Input 
                                startContent={
                                <IconoirPercentageCircleSolid className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.porcentajeIncapacidad}
                                label="Porcentaje de incapacidad" 
                                isRequired
                                labelPlacement="outside" 
                                name="porcentajeIncapacidad" 
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.porcentajeIncapacidad  ? 'danger' : 'default'}
                                errorMessage={errors.porcentajeIncapacidad}
                                />
                    </div>
        </div>
        <div className="flex gap-[4%]   max-md:flex-col">
        <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center max-md:mt-8">
                                <Input 
                                startContent={
                                <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.edadAccidente}
                                label="Edad a partir de la cual se computan los ingresos" 
                                isRequired
                                labelPlacement="outside" 
                                name="edadAccidente" 
                                className="max-w-xs" 
                                onChange={ (e) => { 
                                    setEdadAccidente(e.target.value)
                                    handleInputChange(e);
                                }}
                                onBlur={handleInputChange}
                                color={errors.edadAccidente  ? 'danger' : 'default'}
                                errorMessage={errors.edadAccidente}
                                />
                </div>
                <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center max-md:mt-8">
                                <Input 
                                startContent={
                                <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.edadFinal}
                                label="Edad hasta la cual se computan los ingresos" 
                                isRequired
                                labelPlacement="outside" 
                                name="edadFinal" 
                                className="max-w-xs" 
                                onChange={ (e) => { 
                                    setEdadFinal(e.target.value)
                                    handleInputChange(e);
                                }}
                                onBlur={handleInputChange}
                                color={errors.edadFinal  ? 'danger' : 'default'}
                                errorMessage={errors.edadFinal}
                                />
                </div>
        </div>

        <div className="flex gap-[4%]   max-md:flex-col">
        <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Input 
                                startContent={
                                <IconoirPercentageCircleSolid className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.tasaDescuento}
                                label="Tasa de interés anual" 
                                isRequired
                                labelPlacement="outside" 
                                name="tasaDescuento" 
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.tasaDescuento  ? 'danger' : 'default'}
                                errorMessage={errors.tasaDescuento}
                                />
            </div>
        </div>
        <Divider className="mt-3 mb-5"/>
                    <div className="flex justify-end">
                    <div className="mr-2">
                    <Button>Borrar</Button>
                    </div>
                    <div>
                    <Button type="submit">Calcular</Button>
                    </div>
                </div>
        </form>
        </div>
    )
}