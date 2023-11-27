import React from "react";
import {Button} from "@nextui-org/react";

export default function Navbar () {

    return (
        <div className="flex justify-between">
            <div> 1 </div>
            <div> 2 </div>
            <div className="flex gap-4">
                <Button color="primary" size="md" variant="bordered">Crear Cuenta</Button>  
                <Button color="primary" size="md" variant="solid">Ingresar</Button>
            </div>
        </div>
    )
}