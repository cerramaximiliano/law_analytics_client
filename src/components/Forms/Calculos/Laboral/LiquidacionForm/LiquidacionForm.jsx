import React, { useState } from "react";
import {Button, Input, Checkbox, CheckboxGroup, Divider} from "@nextui-org/react";
import useFormValidation from "../../../../../hooks/useFormValidation";
import Cash from "../../../../../assets/icons/Cash";
import User from "../../../../../assets/icons/User";
import {SolarCalendarMinimalisticBoldDuotone} from "../../../../../assets/icons/Calendar";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils";

export default function LiquidacionForm () {

    const [fechaIngreso, setFechaIngreso] = useState('');
    const [fechaEgreso, setFechaEgreso] = useState('');
    
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [checked, setChecked] = useState([]);
    const [isInvalid, setIsInvalid] = useState(false);

    const { handleInputChange, validateSubmit } = useFormValidation(errors, setErrors, form, setForm, fechaIngreso, fechaEgreso);


    const handleSubmit = (event) => {
        event.preventDefault();
        const validate = validateSubmit(event);
        console.log(validate)
        if( Object.keys(validate).length === 0 ) {
            deleteObjectEmptyStrings(form)
            if ( checked.length === 0){
                    setIsInvalid(true)
                }else {
                    alert('Hacer calculo');
                }
        }else{
            checked.length === 0 && setIsInvalid(true)
        }
    };

return (
    <div>
                <Divider className="mt-3 mb-5"/>
                <form id="form" onSubmit={handleSubmit} noValidate>
                <div className="flex gap-[4%]   max-md:flex-col">
                    <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                        <Input 
                        startContent={
                            <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text" 
                        label="Reclamante" 
                        name="reclamante"
                        labelPlacement="outside" 
                        className="max-w-xs"/>
                    </div>
                    <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                        <Input 
                        startContent={
                            <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text" 
                        label="Reclamado" 
                        labelPlacement="outside" 
                        name="reclamado"
                        className="max-w-xs"/>
                    </div>
                </div>
                <div className="flex gap-[4%]   max-md:flex-col">
                <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                        <Input 
                        startContent={
                            <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text" 
                        label="Fecha Ingreso"
                        isRequired
                        labelPlacement="outside" 
                        name="fechaIngreso" 
                        className="fv max-w-xs" 
                        color={ errors.fechaIngreso ? 'danger' : 'default' }
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
                    <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                        <Input 
                        startContent={
                            <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text" 
                        label="Fecha Egreso" 
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
                <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                    <Input 
                        startContent={
                            <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text" 
                        label="Salario próximo" 
                        labelPlacement="outside" 
                        isRequired
                        className="mt-3 max-w-xs"
                        name="salarioProximo"
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        color={errors.salarioProximo ? 'danger' : 'default'}
                        errorMessage={errors.salarioProximo}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center mt-3">
                <CheckboxGroup
                    isRequired
                    label="Seleccione Rubros"
                    description="Elija al menos una opción"
                    isInvalid={isInvalid}
                    value={checked}
                    onValueChange={(value) => {
                        setChecked(value)
                        value.length > 0 ? setIsInvalid(false) : setIsInvalid(true)
                    }}
                    >
                    <Checkbox 
                    size="m" 
                    name="liquidacionPreaviso" 
                    value="liquidacionPreaviso"
                    >Preaviso</Checkbox>
                    <Checkbox 
                    size="m" 
                    name="liquidacionIntegracion" 
                    value="liquidacionIntegracion"
                    >Integración mes</Checkbox>
                    <Checkbox 
                    size="m" 
                    name="liquidacionSAC" 
                    value="liquidacionSAC"
                    >SAC proporcional</Checkbox>
                    <Checkbox 
                    size="m" 
                    name="liquidacionSACPreaviso" 
                    value="liquidacionSACPreaviso"
                    >SAC s/ Preaviso</Checkbox>
                    <Checkbox 
                    size="m" 
                    name="liquidacionDiasTrabajados" 
                    value="liquidacionDiasTrabajados"
                    >Días trabajados</Checkbox>
                    <Checkbox 
                    size="m" 
                    name="liquidacionVacaciones" 
                    value="liquidacionVacaciones"
                    >Vacaciones</Checkbox>
                    </CheckboxGroup>
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