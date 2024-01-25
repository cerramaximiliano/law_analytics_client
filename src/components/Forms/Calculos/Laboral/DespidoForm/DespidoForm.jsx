import React, { useState } from "react";
import {Button, Input, CheckboxGroup, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import useFormValidation from "../../../../../hooks/useFormValidation.js";
import Cash from "../../../../../assets/icons/Cash.jsx";
import User from "../../../../../assets/icons/User.jsx";
import {SolarCalendarMinimalisticBoldDuotone} from "../../../../../assets/icons/Calendar.jsx";
import Loader from "../../../../Loader/Loader.jsx";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils.js";
import { indemnizacion, periodo } from '../../../../../hooks/useCalculator.js'
import { Calculo } from "../../../../../utils/classCalcUtils.js";

export default function DespidoForm () {
    const [liquidacionFinal, setLiquidacionFinal] = useState(false);
    const [isInvalid, setIsInvalid] = useState(true);

    const [aplicacionTopes, setAplicacionTopes] = useState(false);
    const [isInvalidTopes, setIsInvalidTopes] = useState(true);

    const [aplicacionMultas, setAplicacionMultas] = useState(false);
    const [isInvalidMultas, setIsInvalidMultas] = useState(true);
    const [isInvalidMultasSelect, setIsInvalidMultasSelect] = useState(true);
    
    const [indemnizacionesEspeciales, setIndemnizacionesEspeciales] = useState(false);
    const [isInvalidIndem, setIsInvalidIndem] = useState(true);

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
        setForm({
            ...form,
            liquidacionFinal: isChecked,
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
            indemnizacionAgravada: isChecked,
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
            multas: isChecked,
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
            topes: isChecked,
            vizzotiIndeminacion: false,
            torrisiIndeminizacion: false
        })
    }
    const handleSelectChange = (value) => {
        setForm({
            ...form,
            multaLey24031: value.target.value
        })
        if (value.target.value === "2") {
            setFechaIngresoFalsa(true);
            setSalarioFalso(false);
        }else if(value.target.value === '3'){
            setSalarioFalso(true);
            setFechaIngresoFalsa(false);
        }else {
            setFechaIngresoFalsa(false);
            setSalarioFalso(false);
        };
        if(value.target.value === "0"){
            setIsInvalidMultasSelect(true);
        }else{
            setIsInvalidMultasSelect(false);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const validate = validateSubmit(event);

        console.log(form);

        if (    form.liquidacionFinal && 
                (!form.preavisoLiquidacion && 
                !form.integracionLiquidacion && 
                !form.sacLiquidacion && 
                !form.sacPreavisoLiquidacion && 
                !form.diasLiquidacion && 
                !form.vacacionesLiquidacion )){
            validate.liquidacionFinal = 'Debe seleccionar al menos una opción';
            setErrors({...errors, liquidacionFinal: 'Debe seleccionar al menos una opción'});
        };
        if( form.multas &&
            (!form.multaArt1 &&
            !form.multaArt2 &&
            !form.multaArt15 &&
            !form.multaArt80 &&
            !form.multaLey24031
            )){
            validate.multas = `Debe seleccionar al menos una opción`;
            setErrors({...errors, multas: 'Debe seleccionar al menos una opción'});
        };
        if( form.indemnizacionAgravada &&
            (!form.indemnizacionDoble &&
            !form.indemnizacionEmbarazo) ){
            validate.indemnizacionAgravada = `Debe seleccionar al menos una opción`;
            setErrors({...errors, indemnizacionAgravada: 'Debe seleccionar al menos una opción'});
        };
        if( form.topes &&
            (!form.torrisiIndeminizacion &&
            !form.vizzotiIndeminacion)
            ){
            validate.topes = `Debe seleccionar al menos una opción`;
            setErrors({...errors, topes: 'Debe seleccionar al menos una opción'});
        };
        console.log(validate)

        if( Object.keys(validate).length === 0 ) {
            deleteObjectEmptyStrings(form)
            console.log('hacer calculo');
            console.log(form);
            // setLoading(true);
            // setTimeout(() => {
            //     console.log(form);
            //     setLoading(false);
            //   }, 10000);

            const resultCalculo = new Calculo(form)

            const resultPeriodo = periodo(
                fechaIngreso,
                fechaEgreso,
                form.dias
            );
            const resultIndemnizacion = indemnizacion(
                resultPeriodo,
                form.remuneracion,
            );

            console.log(resultCalculo);


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
                label="Descontar días no trabajados"
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
                <Checkbox size="sm" color="default" name="incluirSAC" onChange={handleChecked}>Incluir SAC</Checkbox>
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
                    <CheckboxGroup
                        isRequired
                        isInvalid={isInvalid}
                        label="Seleccione las opciones de cálculo"
                        errorMessage={isInvalid && 'Debe seleccionar un opción'}
                        onValueChange={(value) => {
                            setIsInvalid(value.length < 1);
                        }}
                        className="m-auto"
                        >
                        <Checkbox className="max-w-xs" size="m" color="default" value="preavisoLiquidacion" name="preavisoLiquidacion" onChange={handleChecked}>Preaviso</Checkbox>
                        <Checkbox size="m" color="default" value="integracionLiquidacion" name="integracionLiquidacion" onChange={handleChecked}>Integración mes</Checkbox>
                        <Checkbox size="m" color="default" value="sacLiquidacion" name="sacLiquidacion" onChange={handleChecked}>SAC proporcional</Checkbox>
                        <Checkbox size="m" color="default" value="sacPreavisoLiquidacion" name="sacPreavisoLiquidacion" onChange={handleChecked}>SAC s/ Preaviso</Checkbox>
                        <Checkbox size="m" color="default" value="diasLiquidacion" name="diasLiquidacion" onChange={handleChecked}>Días trabajados</Checkbox>
                        <Checkbox size="m" color="default" value="vacacionesLiquidacion" name="vacacionesLiquidacion" onChange={handleChecked}>Vacaciones</Checkbox>
                    </CheckboxGroup>
                    </div>
                    <div className="w-1/2 flex flex-col max-md:w-full">
                        <Checkbox size="m" color="default" name="salarioLiquidacion" className="mt-3 mr-auto ml-auto" onChange={(value) => {(setSalarioProximo(value.target.checked)); handleChecked(value)}}>Salario próximo</Checkbox>
                        {salarioProximo && 
                            <div className="mt-[20px]">
                            <Input 
                            startContent={
                                <Cash className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="text" 
                            label="Salario próximo" 
                            labelPlacement="outside" 
                            isRequired
                            className="max-w-xs mr-auto ml-auto"
                            name="salarioProximo"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            color={errors.salarioProximo ? 'danger' : 'default'}
                            errorMessage={errors.salarioProximo}
                            />
                            </div>

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
                            <CheckboxGroup
                                isRequired
                                isInvalid={isInvalidTopes}
                                label="Seleccione las opciones de cálculo"
                                errorMessage={isInvalidTopes && 'Debe seleccionar un opción'}
                                onValueChange={(value) => {
                                    setIsInvalidTopes(value.length < 1);
                                }}
                                className="m-auto"
                                >
                                <Checkbox size="m" color="default" value="vizzotiIndeminacion" name="vizzotiIndeminacion" onChange={(value) => {setAplicaFalloVizzoti(value.target.checked); handleChecked(value)}}>Aplicar "Vizzoti"</Checkbox>
                                <Checkbox size="m" color="default" value="torrisiIndeminizacion" name="torrisiIndeminizacion" onChange={(value) => {setAplicaFalloTorrisi(value.target.checked); handleChecked(value)}}>Aplicar "Torrisi"</Checkbox>
                            </CheckboxGroup>

                        </div>
                        <div ref={parent}>
                            {
                                (aplicaFalloVizzoti || aplicaFalloTorrisi) && (
                                    <div className="flex mt-3">
                                        <div className="w-1/1 m-auto">
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
                            <CheckboxGroup
                                isRequired
                                isInvalid={isInvalidMultas && isInvalidMultasSelect}
                                label="Seleccione una o más opciones de cálculo"
                                onValueChange={(value) => {
                                    setIsInvalidMultas(value.length < 1);
                                }}
                                className="m-auto"
                                >
                                <Checkbox size="m" color="default" value="multaArt1" name="multaArt1" onChange={handleChecked}>Multa Ley 25.323 art. 1</Checkbox>
                                <Checkbox size="m" color="default" value="multaArt2" name="multaArt2" onChange={handleChecked}>Multa Ley 25.323 art. 2</Checkbox>
                                <Checkbox size="m" color="default" value="multaArt80" name="multaArt80" onChange={handleChecked}>Multa art. 80 LCT</Checkbox>
                                <Checkbox size="m" color="default" value="multaArt15" name="multaArt15" onChange={handleChecked}>Art. 15 Ley 24.013</Checkbox>
                            </CheckboxGroup>


                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col mt-3">
                            <div className="max-w-[50%] self-center min-w-[30%]">
                                <Select
                                    isRequired
                                    isInvalid={isInvalidMultas && isInvalidMultasSelect}
                                    aria-label="false"
                                    placeholder="Seleccione Multa Ley 24.013"
                                    labelPlacement="outside"
                                    className="text-current w-100"
                                    disableSelectorIconRotation
                                    name="indemnizacionRegimen"
                                    onChange={(value) => {
                                        handleSelectChange(value);
                                        handleInputChange(value);
                                    }}
                                    >
                                    <SelectItem className="text-black" key={0} value={"0"}>Seleccione Multa Ley 24.013</SelectItem>
                                    <SelectItem className="text-black" key={1} value={"1"}>Art. 8</SelectItem>
                                    <SelectItem className="text-black" key={2} value={"2"}>Art. 9</SelectItem>
                                    <SelectItem className="text-black"  key={3} value={"3"}>Art. 10</SelectItem>
                                </Select>
                            </div>
                            <div className="max-md:mt-4 m-auto mt-[10px]" ref={parent}>
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



                        <div className="flex flex-col mt-3 m-auto">

                                <Checkbox size="m" color="default" name="multaSalario" onChange={(value) => {setSalarioMultas(value.target.checked); handleChecked(value)}}>Salario Multas</Checkbox>

                            <div className="mt-[10px]" ref={parent}>
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
                            <CheckboxGroup
                                isRequired
                                isInvalid={isInvalidIndem}
                                label="Seleccione las opciones de cálculo"
                                errorMessage={isInvalidIndem && 'Debe seleccionar un opción'}
                                onValueChange={(value) => {
                                    setIsInvalidIndem(value.length < 1);
                                }}
                                className="m-auto"
                                >
                                <Checkbox size="m" color="default" value="indemnizacionEmbarazo" name="indemnizacionEmbarazo" onChange={handleChecked}>Indemnización por Matrimonio</Checkbox>
                                <Checkbox size="m" color="default" value="indemnizacionDoble"  name="indemnizacionDoble" onChange={handleChecked}>Doble Indemnización</Checkbox>
                            </CheckboxGroup>


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