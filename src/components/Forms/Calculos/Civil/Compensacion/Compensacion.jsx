import React, { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import Loader from "../../../../Loader/Loader.jsx";
import useFormValidation from "../../../../../hooks/useFormValidation.js";
import Cash from "../../../../../assets/icons/Cash";
import {SolarCalendarMinimalisticBoldDuotone} from "../../../../../assets/icons/Calendar";
import { IconoirPercentageCircleSolid, SolarHashtagSquareBoldDuotone } from "../../../../../assets/icons/Maths.jsx";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils.js";


export default function Compensacion () {
    const [currentStep, setCurrentStep] = useState(1);
    const [difPatrimonial, setDifPatrimonial] = useState(false);
    const [atribucionViv, setAtribucionViv] = useState(false);
    const [parent, enableAnimations] = useAutoAnimate();

    const handleOnChangeSwitchDif = (event) => {
        const isChecked = event.target.checked;
        setDifPatrimonial(isChecked);
    }
    const handleOnChangeSwitchViv = (event) => {
        const isChecked = event.target.checked;
        setAtribucionViv(isChecked);
    }
    
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [edadDisolucion, setEdadDisolucion] = useState('');
    const [edadLimite, setEdadLimite] = useState('');
    const { handleInputChange, validateSubmit, handleChecked } = useFormValidation(errors, setErrors, form, setForm, edadDisolucion, edadLimite);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validate = validateSubmit(event);

        if( Object.keys(validate).length === 0 ) {
            deleteObjectEmptyStrings(form)
            if(currentStep === 1){
                setCurrentStep(currentStep + 1);

            }else{
                console.log('hacer calculo')
            }
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
        {currentStep === 1 && (
                    <div>
                    <div className="flex gap-[4%]   max-md:flex-col">
                    <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                                <Input 
                                startContent={
                                <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.edadDisolucion}
                                label="Edad al momento de disolución del vínculo" 
                                isRequired
                                labelPlacement="outside" 
                                name="edadDisolucion" 
                                className="max-w-xs" 
                                onChange={ (e) => { 
                                    setEdadDisolucion(e.target.value)
                                    handleInputChange(e);
                                }}
                                onBlur={handleInputChange}
                                color={errors.edadDisolucion  ? 'danger' : 'default'}
                                errorMessage={errors.edadDisolucion}
                                />
                            </div>
                            <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">

                                <Input 
                                startContent={
                                <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text" 
                                value={form.edadLimite}
                                label="Edad límite de cálculo de ingresos" 
                                isRequired
                                labelPlacement="outside" 
                                name="edadLimite" 
                                className="max-w-xs" 
                                onChange={(e) => {
                                    setEdadLimite(e.target.value)
                                    handleInputChange(e);
                                }}
                                onBlur={handleInputChange}
                                color={errors.edadLimite  ? 'danger' : 'default'}
                                errorMessage={errors.edadLimite}
                                />
                            </div>        
                    </div>
                    <div className="flex gap-[4%]   max-md:flex-col">
                    <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center max-md:mt-12">

                                <Input 
                                startContent={
                                <IconoirPercentageCircleSolid className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.probabilidadCapacitacion}
                                label="Probabilidad de capacitación de no haberse iniciado el vínculo" 
                                isRequired
                                labelPlacement="outside" 
                                name="probabilidadCapacitacion" 
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.probabilidadCapacitacion  ? 'danger' : 'default'}
                                errorMessage={errors.probabilidadCapacitacion}
                                />
                            </div>
                            <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">

                                <Input 
                                startContent={
                                <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text"
                                value={form.ingresoMaximo}
                                label="Ingreso máximo para capacitación frustrada" 
                                isRequired
                                labelPlacement="outside" 
                                name="ingresoMaximo" 
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.ingresoMaximo  ? 'danger' : 'default'}
                                errorMessage={errors.ingresoMaximo}
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
                                value={form.probabilidadIngreso}
                                label="Probabilidad de acceder al máximo ingreso" 
                                isRequired
                                labelPlacement="outside" 
                                name="probabilidadIngreso" 
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.probabilidadIngreso  ? 'danger' : 'default'}
                                errorMessage={errors.probabilidadIngreso}
                                />
                            </div>
                            <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">

                                <Input 
                                startContent={
                                <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text" 
                                label="Ingreso real actual sin capacitación" 
                                value={form.ingresoReal}
                                isRequired
                                labelPlacement="outside" 
                                name="ingresoReal" 
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.ingresoReal  ? 'danger' : 'default'}
                                errorMessage={errors.ingresoReal}
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
                                value={form.probabilidadIngresoReal}
                                label="Probabilidad de acceder o mantener el ingreso real" 
                                isRequired
                                labelPlacement="outside" 
                                name="probabilidadIngresoReal"
                                className="fv max-w-xs" 
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                color={errors.probabilidadIngresoReal  ? 'danger' : 'default'}
                                errorMessage={errors.probabilidadIngresoReal}
                                />
                            </div>
                            <div className="w-[48%]  mt-5 self-center max-md:w-[80%] flex justify-center">
                            <Select
                                                aria-label="false"
                                                placeholder="Seleccione una opción"
                                                label="Cantidad de ingresos mensuales por año"
                                                isRequired
                                                color={errors.ingresosMensuales ? 'danger' : 'default'}
                                                errorMessage={errors.ingresosMensuales}
                                                labelPlacement="outside"
                                                className="max-w-xs text-current"
                                                disableSelectorIconRotation
                                                value={form.ingresosMensuales}
                                                name="ingresosMensuales"
                                                onChange={(value) => {
                                                    handleInputChange(value);
                                                }}
                                                >
                                                <SelectItem className="text-black" key={0} value={"0"}>Seleccione una opción</SelectItem>
                                                <SelectItem className="text-black" key={1} value={"1"}>12 meses -autónomo</SelectItem>
                                                <SelectItem className="text-black" key={2} value={"2"}>13 meses -dependencia</SelectItem>
                                            </Select>
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
                                label="Tasa de descuento anual" 
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
                                <div className="mr-2">
                                <Button type="submit">Siguiente</Button>
                                </div>
                        </div>
                </div>
        )}



            {currentStep === 2 && (
                <div>
                <div className="flex flex-col">
                    <div className="w-full">
                        <Switch size="sm" isSelected={difPatrimonial} onChange={(event) => {handleOnChangeSwitchDif(event);}}>Diferencia patrimonial al finalizar el vínculo</Switch>
                    </div>
                    <div ref={parent}>
                    {
                        difPatrimonial &&
                        <div>
                    <div className="flex gap-[4%]   max-md:flex-col">
                            <div className="w-[48%]  mt-8 self-center">
                                    <Input 
                                    startContent={
                                    <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Patrimonio inicial del cónyuge reclamado" 
                                    value={form.patrimonioReclamado}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="patrimonioReclamado"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.patrimonioReclamado  ? 'danger' : 'default'}
                                    errorMessage={errors.patrimonioReclamado}
                                    />
                            </div>
                            <div className="w-[48%]  mt-8 self-center">
                            <Input 
                                    startContent={
                                    <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Patrimonio inicial del cónyuge reclamante" 
                                    value={form.patrimonioReclamante}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="patrimonioReclamante"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.patrimonioReclamante  ? 'danger' : 'default'}
                                    errorMessage={errors.patrimonioReclamante}
                                    />
                            </div>
                        </div>
                        <div className="flex gap-[4%]   max-md:flex-col">
                        <div className="w-[48%]  mt-8 self-center">
                                    <Input 
                                    startContent={
                                    <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Patrimonio final del cónyuge reclamado" 
                                    value={form.patrimonioFinalReclamado}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="patrimonioFinalReclamado"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.patrimonioFinalReclamado  ? 'danger' : 'default'}
                                    errorMessage={errors.patrimonioFinalReclamado}
                                    />
                            </div>
                            <div className="w-[48%]  mt-8 self-center">
                            <Input 
                                    startContent={
                                    <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Patrimonio final del cónyuge reclamante" 
                                    value={form.patrimonioFinalReclamante}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="patrimonioFinalReclamante"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.patrimonioFinalReclamante  ? 'danger' : 'default'}
                                    errorMessage={errors.patrimonioFinalReclamante}
                                    />
                            </div>
                        </div>
                        </div>
                    }
                </div>
                </div>

                <div className="flex flex-col mt-3">
                    <div className="w-full">
                    <Switch size="sm" isSelected={atribucionViv} onChange={(event) => {handleOnChangeSwitchViv(event);}}>Valor relevante a la atribución de vivienda</Switch>
                    </div>
                    <div ref={parent}>
                        {
                            atribucionViv &&
                            <div>
                        <div className="flex gap-[4%]   max-md:flex-col">
                        <div className="w-[48%]  mt-8 self-center">
                                <Input 
                                    startContent={
                                    <SolarHashtagSquareBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Cantidad de meses de atribución de vivienda familiar" 
                                    value={form.mesesViviendaFamiliar}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="mesesViviendaFamiliar"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.mesesViviendaFamiliar  ? 'danger' : 'default'}
                                    errorMessage={errors.mesesViviendaFamiliar}
                                    />
                                </div>
                                <div className="w-[48%]  mt-8 self-center">
                                    <Input 
                                    startContent={
                                    <IconoirPercentageCircleSolid className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text"
                                    value={form.cuotaParte}
                                    label="Cuotaparte de titularidad del inmueble o del pago del cánon locativo del reclamado"
                                    isRequired
                                    labelPlacement="outside" 
                                    name="cuotaParte" 
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.cuotaParte  ? 'danger' : 'default'}
                                    errorMessage={errors.cuotaParte}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-[4%]   max-md:flex-col">
                            <div className="w-[48%]  mt-8 self-center">
                                    <Input 
                                    startContent={
                                    <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Valor locativo anual del inmueble" 
                                    value={form.valorLocativo}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="valorLocativo"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.valorLocativo  ? 'danger' : 'default'}
                                    errorMessage={errors.valorLocativo}
                                    />
                                </div>
                                <div className="w-[48%]  mt-8 self-center">
                                    <Input 
                                    startContent={
                                    <SolarHashtagSquareBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Cantidad de hijos que viven en inmueble familiar" 
                                    value={form.cantidadHijos}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="cantidadHijos"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.cantidadHijos  ? 'danger' : 'default'}
                                    errorMessage={errors.cantidadHijos}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-[4%]   max-md:flex-col">
                            <div className="w-[48%]  mt-8 self-center">
                                    <Input 
                                    startContent={
                                    <SolarHashtagSquareBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    type="text" 
                                    label="Cantidad de otros familiares que viven en inmueble familiar" 
                                    value={form.cantidadFamiliares}
                                    isRequired
                                    labelPlacement="outside" 
                                    name="cantidadFamiliares"
                                    className="fv max-w-xs" 
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    color={errors.cantidadFamiliares  ? 'danger' : 'default'}
                                    errorMessage={errors.cantidadFamiliares}
                                    />
                                </div>
                            </div>
                            </div>
                        }
                    </div>
                </div>
                <Divider className="mt-3 mb-5"/>
                    <div className="flex justify-end">
                    <div className="mr-2">
                    <Button onClick={handlePrev}>Atras</Button>
                    </div>
                    <div className="mr-2">
                    <Button>Borrar</Button>
                    </div>
                    <div>
                    <Button type="submit" onSubmit={handleSubmit} >Calcular</Button>
                    </div>
                </div>
                </div>
            )}




        </form>
        </div>
    )
};