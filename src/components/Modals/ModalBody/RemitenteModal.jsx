import React from "react";
import {Button, Input} from "@nextui-org/react";
import User from "../../../assets/icons/User.jsx"
import { SolarFileTextBoldDuotone } from "../../../assets/icons/Files.jsx";
import { SolarMapPointSearchBold } from "../../../assets/icons/Location.jsx";
import { SolarCityBoldDuotone } from "../../../assets/icons/City.jsx";
import { SolarLetterBoldDuotone } from "../../../assets/icons/Notifications.jsx";


export default function RemitenteModal ( {handleInputChange} ) {


    return (
        <div>
                                <div className="m-auto">
                    <Input 
                    isRequired
                    startContent={
                        <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="text" 
                    label="Nombre y Apellido"
                    name="remitente"
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
                    label="DNI" 
                    name="dniRemitente"
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
                    label="CUIL" 
                    name="cuilRemitente"
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
                    name="domicilioRemitente"
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
                    name="localidadRemitente"
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
                    name="provinciaRemitente"
                    labelPlacement="outside" 
                    className="max-w-xs"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="m-auto">
                <Input 
                isRequired
                    startContent={
                        <SolarLetterBoldDuotone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" fill="currentColor" />
                    }
                    type="text" 
                    label="Código Postal" 
                    name="cpRemitente"
                    labelPlacement="outside" 
                    className="max-w-xs"
                    onChange={handleInputChange}
                    />
                </div>

        </div>
    )
};