import React, { useState } from "react";
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import useFormValidation from "../../../../../hooks/useFormValidation.js";
import Cash from "../../../../../assets/icons/Cash.jsx";
import User from "../../../../../assets/icons/User.jsx";
import {SolarCalendarMinimalisticBoldDuotone} from "../../../../../assets/icons/Calendar.jsx";
import Loader from "../../../../Loader/Loader.jsx";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils.js";

export default function DespidoForm () {
    const [liquidacionFinal, setLiquidacionFinal] = useState(false);
    const [aplicacionTopes, setAplicacionTopes] = useState(false);
    const [aplicacionMultas, setAplicacionMultas] = useState(false);
    const [indemnizacionesEspeciales, setIndemnizacionesEspeciales] = useState(false);
    const [salarioProximo, setSalarioProximo] = useState(false);
    const [aplicaFalloVizzoti, setAplicaFalloVizzoti] = useState(false);
    const [aplicaFalloTorrisi, setAplicaFalloTorrisi] = useState(false);
    const [fechaIngresoFalsa, setFechaIngresoFalsa] = useState(false);
    const [salarioFalso, setSalarioFalso] = useState(false)
    const [salarioMultas, setSalarioMultas] = useState(false);
    const [parent, enableAnimations] = useAutoAnimate();

    const [fechaIngreso, setFechaIngreso] = useState('');
    const [fechaEgreso, setFechaEgreso] = useState('');

    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const { handleInputChange, validateSubmit, handleChecked } = useFormValidation(errors, setErrors, form, setForm, fechaIngreso, fechaEgreso);

    const handleOnChangeLiquidacion = (event) => {
        const isChecked = event.target.checked;
        setLiquidacionFinal(isChecked);
        setSalarioProximo(!isChecked);
        setForm({...form,
            preavisoLiquidacion: false,
            integracionLiquidacion: false,
            sacLiquidacion: false,
            salarioLiquidacion: false,
            sacPreavisoLiquidacion: false,
            diasLiquidacion: false,
            vacacionesLiquidacion: false,
        })
    };
    const handleOnChangeIndemnizaciones = (event) => {
        const isChecked = event.target.checked;
        setIndemnizacionesEspeciales(isChecked)
        setForm({
            ...form,
            indemnizacionEmbarazo:false,
            indemnizacionDoble:false
        })
        
    }
    const handleOnChangeMultas = (event) => {
        const isChecked = event.target.checked;
        setAplicacionMultas(isChecked);
        setSalarioMultas((prevSalarioMultas) => {
            return !isChecked
        });
        setFechaIngresoFalsa(!isChecked);
        setSalarioFalso(!isChecked);
        setForm({
            ...form,
            multaArt1: false,
            multaArt2: false,
            multaArt80: false,
            multaArt15: false,
            multaSalario: false,
        })
    };
    const handleOnChangeTopes = (event) => {
        const isChecked = event.target.checked;
        setAplicacionTopes(isChecked);
        setAplicaFalloVizzoti(!isChecked);
        setAplicaFalloTorrisi(!isChecked);
        setForm ({
            ...form,
            vizzotiIndeminacion: false,
            torrisiIndeminizacion: false
        })
    }
    const handleSelectChange = (value) => {
        if (value.target.value === "2") {
            setFechaIngresoFalsa(true);
            setSalarioFalso(false);
        }else if(value.target.value === '3'){
            setSalarioFalso(true);
            setFechaIngresoFalsa(false);
        }else {
            setFechaIngresoFalsa(false);
            setSalarioFalso(false);
        }
    };
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
        <form id="form" onSubmit={handleSubmit} noValidate>
        <div className="flex gap-[4%]   max-md:flex-col self-center">
        <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
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
            <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
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
                label="Remuneración" 
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
            <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                <Input 
                startContent={
                        <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="text" 
                label="Otras sumas adeudadas" 
                labelPlacement="outside"
                className="max-w-xs"
                name="otrasSumas"
                onChange={handleInputChange}
                onBlur={handleInputChange}
                color={errors.otrasSumas ? 'danger' : 'default'}
                errorMessage={errors.otrasSumas}
                />
            </div>
        </div>
        <div className="flex gap-[4%]   max-md:flex-col">
        <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                <div className="w-1/2">
                <Input 
                startContent={
                    <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="text" 
                label="Desc. días" 
                labelPlacement="outside"
                className="max-w-xs"
                name="dias"
                onChange={handleInputChange}
                onBlur={handleInputChange}
                color={errors.dias ? 'danger' : 'default'}
                errorMessage={errors.dias}
                />
                </div>
            </div>
            <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                <Checkbox size="m" color="default" name="incluirSAC" onChange={handleChecked}>Incluir SAC</Checkbox>
            </div>                
        </div>
        <Divider className="mt-3 mb-5"/>
        <div className="flex justify-end">
            <div className="w-1/2">
            <Switch size="sm" onChange={handleOnChangeLiquidacion}>Liquidación Final</Switch>
            </div>
        </div>
        <div ref={parent}>
        {
            liquidacionFinal && (
                <div className="flex flex-row mt-3 max-md:flex-col max-md:ml-[25%]">
                <div className="w-1/2 flex flex-col max-md:w-full">
                    <Checkbox size="m" color="default" name="preavisoLiquidacion" onChange={handleChecked}>Preaviso</Checkbox>
                    <Checkbox size="m" color="default" name="integracionLiquidacion" onChange={handleChecked}>Integración mes</Checkbox>
                    <Checkbox size="m" color="default" name="sacLiquidacion" onChange={handleChecked}>SAC proporcional</Checkbox>
                    <Checkbox size="m" color="default" name="salarioLiquidacion" className="mt-3" onChange={(value) => {(setSalarioProximo(value.target.checked)); handleChecked(value)}}>Salario próximo</Checkbox>
                </div>
                <div className="w-1/2 flex flex-col max-md:w-full">
                    <Checkbox size="m" color="default" name="sacPreavisoLiquidacion" onChange={handleChecked}>SAC s/ Preaviso</Checkbox>
                    <Checkbox size="m" color="default" name="diasLiquidacion" onChange={handleChecked}>Días trabajados</Checkbox>
                    <Checkbox size="m" color="default" name="vacacionesLiquidacion" onChange={handleChecked}>Vacaciones</Checkbox>
                    {salarioProximo && 
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
                    }
                </div>
            </div>
            )
        }
        </div>



        <Divider className="mt-3 mb-5"/>
        <div className="flex justify-end">
            <div className="w-1/2">
            <Switch size="sm" onChange={handleOnChangeTopes}>Aplicación de Topes</Switch>
            </div>
        </div>

        <div ref={parent}>
            {
                aplicacionTopes && (
                    <div>
                            <div className="flex flex-row mt-3">
                            <div className="w-1/2">
                                <Checkbox size="m" color="default" name="vizzotiIndeminacion" onChange={(value) => {setAplicaFalloVizzoti(value.target.checked); handleChecked(value)}}>Aplicar "Vizzoti"</Checkbox>
                            </div>
                            <div className="w-1/2">
                                <Checkbox size="m" color="default" name="torrisiIndeminizacion" onChange={(value) => {setAplicaFalloTorrisi(value.target.checked); handleChecked(value)}}>Aplicar "Torrisi"</Checkbox>
                            </div>
                        </div>
                        <div ref={parent}>
                            {
                                (aplicaFalloVizzoti || aplicaFalloTorrisi) && (
                                    <div className="flex mt-3">
                                        <div className="w-1/2">
                                        <Input
                                            startContent={
                                                <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        type="text" 
                                        isRequired
                                        label="Salario art. 245 LCT" 
                                        labelPlacement="outside"  
                                        className=" max-w-xs"
                                        name="salarioTope"
                                        onChange={handleInputChange}
                                        onBlur={handleInputChange}
                                        color={errors.salarioTope ? 'danger' : 'default'}
                                        errorMessage={errors.salarioTope}
                                        >
                                        </Input>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>


        <Divider className="mt-3 mb-5"/>
        <div className="flex justify-end">
            <div className="w-1/2">
            <Switch size="sm" onChange={handleOnChangeMultas}>Aplicación de Multas</Switch>
            </div>
        </div>
        <div ref={parent}>
            {
                aplicacionMultas && (
                    <div>
                    <div className="flex flex-row mt-3">
                        <div className="w-1/2 flex flex-col">
                            <Checkbox size="m" color="default" name="multaArt1" onChange={handleChecked}>Multa Ley 25.323 art. 1</Checkbox>
                            <Checkbox size="m" color="default" name="multaArt2" onChange={handleChecked}>Multa Ley 25.323 art. 2</Checkbox>
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <Checkbox size="m" color="default" name="multaArt80" onChange={handleChecked}>Multa art. 80 LCT</Checkbox>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row mt-3 max-md:flex-col">
                            <div className="w-1/2 flex">
                                <Select
                                    aria-label="false"
                                    placeholder="Seleccione Multa"
                                    labelPlacement="outside"
                                    className="max-w-xs text-current"
                                    disableSelectorIconRotation
                                    name="indeminizacionRegimen"
                                    onChange={(value) => {
                                        handleSelectChange(value);
                                        handleInputChange(value);
                                    }}
                                    >
                                    <SelectItem className="text-black" key={0} value={"0"}>Seleccione Multa</SelectItem>
                                    <SelectItem className="text-black" key={1} value={"1"}>Art. 8</SelectItem>
                                    <SelectItem className="text-black" key={2} value={"2"}>Art. 9</SelectItem>
                                    <SelectItem className="text-black"  key={3} value={"3"}>Art. 10</SelectItem>
                                </Select>
                            </div>
                            <div className="w-1/2 max-md:mt-4" ref={parent}>
                                {
                                    fechaIngresoFalsa && (
                                        <Input
                                        startContent={
                                            <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        } 
                                        type="text" 
                                        label="Fecha ingreso falsa" 
                                        isRequired
                                        labelPlacement="outside" 
                                        className="max-w-xs"
                                        name="fechaFalsa"
                                        onChange={(e) => {
                                            handleInputChange(e, { isAfter: true, otherValue: fechaIngreso })}
                                        }
                                        onBlur={(e) => {
                                            handleInputChange(e, { isAfter: true, otherValue: fechaIngreso }
                                        )}
                                        }
                                        color={errors.fechaFalsa ? 'danger' : 'default'}
                                        errorMessage={errors.fechaFalsa}
                                        ></Input>
                                    )
                                }
                                {
                                    salarioFalso && (
                                        <Input 
                                        startContent={
                                            <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        type="text" 
                                        label="Salario falso" 
                                        labelPlacement="outside" 
                                        isRequired
                                        className="max-w-xs"
                                        name="salarioFalso"
                                        onChange={handleInputChange}
                                        color={errors.salarioFalso ? 'danger' : 'default'}
                                        errorMessage={errors.salarioFalso}
                                        ></Input>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                                <Checkbox size="m" color="default" name="multaArt15" onChange={handleChecked}>Art. 15 Ley 24.013</Checkbox>
                        </div>
                        <div className="flex flex-row mt-3">
                            <div className="w-1/2">
                                <Checkbox size="m" color="default" name="multaSalario" onChange={(value) => {setSalarioMultas(value.target.checked); handleChecked(value)}}>Salario Multas</Checkbox>
                            </div>
                            <div className="w-1/2" ref={parent}>
                                {
                                    salarioMultas && (
                                        <Input 
                                        startContent={
                                            <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        type="text" 
                                        label="Salario Multas" 
                                        labelPlacement="outside" 
                                        isRequired
                                        className="max-w-xs"
                                        name="salarioMultas"
                                        onChange={handleInputChange}
                                        color={errors.salarioMultas ? 'danger' : 'default'}
                                        errorMessage={errors.salarioMultas}
                                        ></Input>                                        
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    </div>

                )
            }

        </div>

        <Divider className="mt-3 mb-5"/>
        <div className="flex justify-end">
            <div className="w-1/2">
            <Switch size="sm" onChange={(event) => {handleOnChangeIndemnizaciones(event);}}>Indemnizaciones Especiales</Switch>
            </div>
        </div>
        <div ref={parent}>
            {
                indemnizacionesEspeciales && (
                    <div className="flex flex-row mt-3">
                        <div className="w-1/2">
                        <Checkbox size="m" color="default" name="indemnizacionEmbarazo" onChange={handleChecked}>Indemnización por Matrimonio</Checkbox>
                        </div>
                        <div className="w-1/2">
                        <Checkbox size="m" color="default" name="indemnizacionDoble" onChange={handleChecked}>Doble Indemnización</Checkbox>
                        </div>
                    </div>
                )
            }

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