import React from "react";
import { SolarFileCorruptedBold } from "../../assets/icons/NotFound";



export default function RouteNotFound(){
    return (
        <div className="flex flex-col  m-auto">
        <div className="flex justify-center">
            <SolarFileCorruptedBold width="8rem" height="8rem" fill="#f31260" />
        </div>
        <div className="flex items-center mt-5">
            <p className="font-bold text-xl">Error 404! Página no encontrada!</p>
        </div>
        </div>
        )
}


