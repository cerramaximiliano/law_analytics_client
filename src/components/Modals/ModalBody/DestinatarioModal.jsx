import React from "react";
import {Button, Input} from "@nextui-org/react";
import User from "../../../assets/icons/User.jsx"
import { SolarFileTextBoldDuotone } from "../../../assets/icons/Files.jsx";
import { SolarMapPointSearchBold } from "../../../assets/icons/Location.jsx";
import { SolarCityBoldDuotone } from "../../../assets/icons/City.jsx";
import { SolarLetterBoldDuotone } from "../../../assets/icons/Notifications.jsx";


export default function DestinatarioModal ( {handleInputChange} ) {


    return (
        <div>
        <div className="m-auto">
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
        />
        </div>
        <div className="m-auto">
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
            />
        </div>
        <div className="m-auto">
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
            />
        </div>
        <div className="m-auto">
        <Input 
                isRequired
            startContent={
                <SolarMapPointSearchBold className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text" 
            label="Domicilio" 
            name="domicilioDestinatario"
            labelPlacement="outside" 
            className="max-w-xs"
            onChange={handleInputChange}
            />
        </div>
        <div className="m-auto">
        <Input 
                isRequired
            startContent={
                <SolarCityBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text" 
            label="Localidad" 
            name="localidadDestinatario"
            labelPlacement="outside" 
            className="max-w-xs"
            onChange={handleInputChange}
            />
        </div>
        <div className="m-auto">
        <Input 
                isRequired
            startContent={
                <SolarMapPointSearchBold className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text" 
            label="Provincia" 
            name="provinciaDestinatario"
            labelPlacement="outside" 
            className="max-w-xs"
            onChange={handleInputChange}
            />
        </div>
        <div className="">
            <Input 
                    isRequired
                startContent={
                    <SolarLetterBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0"  fill="currentColor" />
                }
                type="text" 
                label="Código Postal" 
                name="cpDestinatario"
                labelPlacement="outside" 
                className="max-w-xs"
                onChange={handleInputChange}
                />
        </div>
        </div>
    )
};