import React, { useState } from "react";
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import Cash from "../../../../../assets/icons/Cash";
import User from "../../../../../assets/icons/User";
import useFormValidation from "../../../../../hooks/useFormValidation.js";
import { SolarCalendarMinimalisticBoldDuotone } from "../../../../../assets/icons/Calendar.jsx";

import Loader from "../../../../Loader/Loader.jsx";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils.js";


export default function InteresesForm() {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const [fechaIngreso, setFechaIngreso] = useState('');
    const [fechaEgreso, setFechaEgreso] = useState('');

    const { handleInputChange, validateSubmit, handleChecked } = useFormValidation(errors, setErrors, form, setForm, fechaIngreso, fechaEgreso);

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
    };

    return (
        <div className="w-full h-full relative">
                    <Divider className="mt-3 mb-5"/>

                    <form id="form" onSubmit={handleSubmit} noValidate>
                    <div className="flex gap-[4%]   max-md:flex-col">
                    <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Input 
                            startContent={
                                <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="text" 
                            label="Reclamante"
                            name="reclamante"
                            labelPlacement="outside" 
                            className="max-w-xs"
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Input 
                            startContent={
                                <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="text" 
                            label="Reclamado" 
                            name="reclamado"
                            labelPlacement="outside" 
                            className="max-w-xs"
                            onChange={handleInputChange}
                            />
                        </div>

                    </div>
                    <div className="flex gap-[4%]   max-md:flex-col">
                    <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Input 
                            startContent={
                                <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="text" 
                            label="Fecha Inicio"
                            isRequired
                            labelPlacement="outside" 
                            name="fechaIngreso" 
                            className="fv max-w-xs" 
                            color={errors.fechaIngreso ? 'danger' : 'default'}
                            onChange={(e) => {
                                setFechaIngreso(e.target.value);
                                handleInputChange(e, { isAfter: true, otherValue: fechaEgreso });
                            }}
                            onBlur={(e) =>{
                                setFechaIngreso(e.target.value);
                                handleInputChange(e, { isAfter: true, otherValue: fechaEgreso });
                            }}
                            errorMessage={errors.fechaIngreso}
                            />

                        </div>
                        <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Input 
                            startContent={
                                <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="text" 
                            label="Fecha Final" 
                            isRequired
                            labelPlacement="outside" 
                            name="fechaEgreso" 
                            className="fv max-w-xs" 
                            color={errors.fechaEgreso ? 'danger' : 'default'}
                            onChange={(e) => {
                                setFechaEgreso(e.target.value);
                                handleInputChange(e, { isBefore: true, otherValue: fechaIngreso });
                            }}
                            onBlur={(e) => {
                                    setFechaEgreso(e.target.value);
                                    handleInputChange(e, { isBefore: true, otherValue: fechaIngreso });
                            }}
                            errorMessage={errors.fechaEgreso}
                            />
                        </div>
                    </div>

                    <div className="flex gap-[4%]   max-md:flex-col">
                    <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Input 
                            startContent={
                                <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="text" 
                            label="Capital" 
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
                        <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Select
                                    aria-label="false"
                                    placeholder="Seleccione Multa"
                                    label="Tasas de Interés"
                                    isRequired
                                    labelPlacement="outside"
                                    className="max-w-xs text-current"
                                    disableSelectorIconRotation
                                    name="tasaDeInteres"
                                    color={errors.tasaDeInteres ? 'danger' : 'default'}
                                    onChange={handleInputChange}
                                    >
                                    <SelectItem className="text-black" key={0} value={"0"}>Seleccione Tasa</SelectItem>
                                    <SelectItem className="text-black" key={1} value={"1"}>Tasa Pasiva BCRA</SelectItem>
                                    <SelectItem className="text-black"  key={2} value={"2"}>Tasa Pasiva BNA</SelectItem>
                                    <SelectItem className="text-black" key={3} value={"3"}>Tasa Activa BNA</SelectItem>
                                    <SelectItem className="text-black" key={4} value={"4"}>Tasa Activa BNA -Acta 2601-</SelectItem>
                                    <SelectItem className="text-black" key={5} value={"5"}>Tasa Activa BNA -Acta 2658-</SelectItem>
                                </Select>
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
}