import React, { useState, useEffect } from "react";
import {Button, Input, Autocomplete, AutocompleteItem, Select, SelectSection, SelectItem} from "@nextui-org/react";
import User from "../../../assets/icons/User.jsx"
import { SolarFileTextBoldDuotone } from "../../../assets/icons/Files.jsx";
import { SolarMapPointSearchBold } from "../../../assets/icons/Location.jsx";
import { SolarCityBoldDuotone } from "../../../assets/icons/City.jsx";
import { SolarLetterBoldDuotone } from "../../../assets/icons/Notifications.jsx";
import axios from 'axios';
import useFormValidation from "../../../hooks/useFormValidation.js";


export default function DestinatarioModal ({onClose}) {
    const BASE_URL = import.meta.env.VITE_URL_SERVER;
    const provincias = ['Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Cordoba', 'Corrientes', 'Entre Rios', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquen', 'Rio Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucuman'];
    const [localidades, setLocalidades] = useState([]);
    const [selectedKey, setSelectedKey] = useState('');
    const handleChange = (event)  => {
        const {value} = event.target;
        setSelectedKey(value)
    };

    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const { handleInputChange, validateSubmit, handleChecked } = useFormValidation(errors, setErrors, form, setForm);

    useEffect(() => {
      const localidades = axios(`${BASE_URL}localidades/provincia?provincia=${selectedKey}`)
      .then(({data}) => {
        setLocalidades(data.localidades)
      })
      .catch(err => console.log(err))
    }, [selectedKey])


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
        <div>
        <form noValidate onSubmit={handleSubmit}>
        <div className="mt-5 flex justify-center">
        <Input
        isRequired
        startContent={
            <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="text" 
        label="Nombre y Apellido/Razón Social" 
        name="destinatario"
        labelPlacement="outside" 
        className="max-w-xs"
        onChange={handleInputChange}
        color={errors.destinatario  ? 'danger' : 'default'}
        errorMessage={errors.destinatario}
        />
        </div>
        <div className="mt-5 flex justify-center">
        <Input
            isRequired
            startContent={
                <SolarFileTextBoldDuotone fill="grey" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text" 
            label="Actividad" 
            name="actividadDestinatario"
            labelPlacement="outside" 
            className="max-w-xs"
            onChange={handleInputChange}
            color={errors.actividadDestinatario  ? 'danger' : 'default'}
            errorMessage={errors.actividadDestinatario}
            />
        </div>
        <div className="mt-5 flex justify-center">
        <Input 
                isRequired
            startContent={
                <SolarFileTextBoldDuotone fill="grey" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text" 
            label="CUIT" 
            name="cuitDestinatario"
            labelPlacement="outside" 
            className="max-w-xs"
            onChange={handleInputChange}
            color={errors.cuitDestinatario  ? 'danger' : 'default'}
            errorMessage={errors.cuitDestinatario}
            />
        </div>
        <div className="mt-5 flex justify-center">
                    <Select
                    isRequired
                    labelPlacement="outside"
                    label="Provincia"
                    placeholder="Seleccione provincia"
                    onChange={handleChange}
                    startContent={
                        <SolarMapPointSearchBold className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    className="max-w-xs text-black"
                    >
                    {provincias.map((item) => (
                        <SelectItem className="text-black" key={item} value={item}>
                        {item}
                        </SelectItem>
                    ))}
                    </Select>
        </div>
        <div className="mt-5 flex justify-center">
        <Select
                    isRequired
                    labelPlacement="outside"
                    label="Localidad"
                    placeholder="Seleccione localidad"
                    startContent={
                        <SolarMapPointSearchBold className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    classNames= {{
                        base:  [
                            "max-w-xs",
                        ],
                        trigger: "text-black",
                        listboxWrapper: "text-black"
                    }}
                    >
                    {localidades.map((item) => (
                        <SelectItem className="text-black" key={item} value={item}>
                        {item}
                        </SelectItem>
                    ))}
                    </Select>
        </div>
        <div className="mt-5 flex justify-center">
        <Input 
                isRequired
            startContent={
                <SolarMapPointSearchBold className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text" 
            label="Domicilio" 
            name="domicilioDestinatario"
            labelPlacement="outside" 
            className= "max-w-xs"
            onChange={handleInputChange}
            color={errors.domicilioDestinatario  ? 'danger' : 'default'}
            errorMessage={errors.domicilioDestinatario}
            />
        </div>
        <div className="mt-5 flex justify-center">
            <Input 
                    isRequired
                startContent={
                    <SolarLetterBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0"  fill="currentColor" />
                }
                type="text" 
                label="Código Postal" 
                name="cpDestinatario"
                labelPlacement="outside" 
                className= "max-w-xs"
                onChange={handleInputChange}
                color={errors.cpDestinatario  ? 'danger' : 'default'}
                errorMessage={errors.cpDestinatario}
                />
        </div>
        <div className="mt-5 flex justify-end">
            <div className="mr-2">
                <Button color="danger" variant="flat" onPress={onClose}>Cerrar</Button>
            </div>
            <div type='submit'>
                <Button color="primary" type="submit">Guardar</Button>
            </div>
        </div>
                    </form>
        </div>
    )
};