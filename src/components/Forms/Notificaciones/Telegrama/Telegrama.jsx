import React, { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider, Autocomplete, AutocompleteItem, useDisclosure} from "@nextui-org/react";
import useFormValidation from "../../../../hooks/useFormValidation";
import Loader from "../../../Loader/Loader";
import User from "../../../../assets/icons/User.jsx"
import { SolarFileTextBoldDuotone } from "../../../../assets/icons/Files.jsx";
import { SolarLetterBoldDuotone } from "../../../../assets/icons/Notifications.jsx";
import { SolarCityBoldDuotone } from "../../../../assets/icons/City.jsx";
import { SolarMapPointSearchBold } from "../../../../assets/icons/Location.jsx";
import Add from "../../../Modals/Add.jsx";


export default function Telegrama (){

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modal, setModal] = useState();

    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const [remitente, setRemitente] = useState([]);
    const [destinatario, setDestinatario] = useState([]);

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
            <Add isOpen={isOpen} onOpenChange={onOpenChange} handleInputChange={handleInputChange} modal={modal} ></Add>
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
        </form>
        </div>
    )
};