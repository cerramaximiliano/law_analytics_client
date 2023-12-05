import React, { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {Button, Input, Textarea, Divider, RadioGroup, Autocomplete, AutocompleteItem, useDisclosure} from "@nextui-org/react";
import Loader from "../../../Loader/Loader";
import User from "../../../../assets/icons/User.jsx"
import Add from "../../../Modals/Add.jsx";
import useFormValidation from "../../../../hooks/useFormValidation.js";
import { CustomRadio } from "../../../UI/CustomRadio.jsx";
import { SolarCalendarMinimalisticBoldDuotone } from "../../../../assets/icons/Calendar.jsx";

export default function Telegrama (){
    const [parent, enableAnimations] = useAutoAnimate();

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modal, setModal] = useState();

    const [remitente, setRemitente] = useState([]);
    const [destinatario, setDestinatario] = useState([]);

    const [loading, setLoading] = useState(false);
    
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const { handleInputChange, validateSubmit, handleChecked } = useFormValidation(errors, setErrors, form, setForm);

    const [selectedRadio, setSelectedRadio] = useState("telegrama");

    return (
        <div className="w-full h-full relative">
        <Loader loading={loading}/>
        <Divider className="mt-3 mb-5"/>
        <div className="flex gap-[4%]   max-md:flex-col self-center">
        <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex flex-col justify-center">
                <div className="flex justify-center">
                    <Autocomplete
                    isRequired
                    labelPlacement="outside"
                    label="Remitente"
                    placeholder="Seleccione remitente"
                    emptyContent="No se han encontrado resultados"
                    startContent={
                        <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    className="max-w-xs"
                    >
                    {remitente.map((item) => (
                        <AutocompleteItem key={item.value} value={item.value}>
                        {item.label}
                        </AutocompleteItem>
                    ))}
                    </Autocomplete>
                </div>
                <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                            <div className="flex items-center w-1/3"> 
                                    <Divider></Divider>
                            </div>
                            <div className="ml-3 mr-3">
                                <p>o</p>
                            </div>
                            <div className="flex items-center w-1/3"> 
                                    <Divider></Divider>
                            </div>
                        </div>
                <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                    <Button color="primary" onPress={() => {onOpen(); setModal('remitente')}}>Agregar Remitente</Button>
                </div>
            </div>
            <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex flex-col justify-center">
                        <div className="flex justify-center">
                        <Autocomplete
                                isRequired
                                labelPlacement="outside"
                                label="Destinatario"
                                placeholder="Seleccione destinatario"
                                emptyContent="No se han encontrado resultados"
                                startContent={
                                    <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                className="max-w-xs"
                                >
                                {
                                destinatario.map((item) => (
                                    <AutocompleteItem key={item.value} value={item.value}>
                                    {item.label}
                                    </AutocompleteItem>
                                ))
                                }
                                </Autocomplete>
                        </div>
                        <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                            <div className="flex items-center w-1/3"> 
                                    <Divider></Divider>
                            </div>
                            <div className="ml-3 mr-3">
                                <p>o</p>
                            </div>
                            <div className="flex items-center w-1/3"> 
                                    <Divider></Divider>
                            </div>
                        </div>
                        <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex justify-center">
                            <Button  color="primary" onPress={() => {onOpen(); setModal('destinatario')}}>Agregar Destinatario</Button>
                        </div>
              </div>
        </div>



            <div>
                <Add isOpen={isOpen} onOpenChange={onOpenChange} modal={modal} ></Add>
            </div>
            
            <div className="flex gap-[4%]   max-md:flex-col self-center mt-5"  >
                <div className="w-[48%]  m-auto">
                <RadioGroup 
                className="items-center"
                description="Seleccione un modelo."  
                value={selectedRadio}
                onValueChange={
                    setSelectedRadio
                }
                >
                <CustomRadio description="" value="telegrama">
                    Telegrama Ley 23.789
                </CustomRadio>
                <CustomRadio description="" value="renuncia">
                    Telegrama de Renuncia
                </CustomRadio>
                </RadioGroup>
                </div>
                <div className="w-[48%] self-center flex justify-center" ref={parent}>
                    {selectedRadio === 'telegrama' ? 
                                    <Textarea
                                    className="md"
                                    name="textTelegrama"
                                    isRequired
                                    minRows={2}
                                    label="Texto"
                                    placeholder="Ingrese el texto de la comunicación"
                                    color={errors.textTelegrama  ? 'danger' : 'default'}
                                    errorMessage={errors.textTelegrama}
                                    onChange={handleInputChange}
                                />
                                :
                                <Input
                                startContent={
                                    <SolarCalendarMinimalisticBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                type="text" 
                                label="Fecha Renuncia"
                                isRequired
                                labelPlacement="outside" 
                                name="fechaRenuncia" 
                                className="fv max-w-xs" 
                                color={errors.fechaRenuncia ? 'danger' : 'default'}
                                errorMessage={errors.fechaRenuncia}
                                onChange={handleInputChange}
                                >
                                </Input>
                    }

                </div>
            </div>

            <div className="flex gap-[4%]   max-md:flex-col self-center">
                <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex flex-col justify-center">
                </div>
                <div className="w-[48%]  mt-4 self-center max-md:w-[80%] flex flex-col justify-center">
                </div>
            </div>

            <Divider  className="mt-3 mb-5"></Divider>
            <div className="flex justify-end">
            <div className="mr-2">
            <Button>Borrar</Button>
            </div>
            <div>
            <Button >Generar</Button>
            </div>
        </div>
        </div>
    )
};