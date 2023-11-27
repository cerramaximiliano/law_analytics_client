import React from "react";
import { FolderErrorSolarBoldDuotone } from "../../assets/icons/Folders";

export default function ContentNotFound(){
    return (
        <div className="flex flex-col">
        <div className="flex justify-center">
            <FolderErrorSolarBoldDuotone width="6rem" height="6rem"/>
        </div>
        <div className="flex items-center">
            <p className="font-bold">No se han encontrado cálculos guardados</p>
        </div>
        </div>
        )
}


