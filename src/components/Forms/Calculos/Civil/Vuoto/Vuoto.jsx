import React, { useState } from "react";
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import Loader from "../../../../Loader/Loader.jsx";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import useFormValidation from "../../../../../hooks/useFormValidation.js";
import Cash from "../../../../../assets/icons/Cash";
import {SolarCalendarMinimalisticBoldDuotone} from "../../../../../assets/icons/Calendar";
import { IconoirPercentageCircleSolid, SolarHashtagSquareBoldDuotone } from "../../../../../assets/icons/Maths.jsx";
import { deleteObjectEmptyStrings } from "../../../../../utils/objectUtils.js";

export default function Vuoto(){
    const [difPatrimonial, setDifPatrimonial] = useState(false);
    const [atribucionViv, setAtribucionViv] = useState(false);
    const [parent, enableAnimations] = useAutoAnimate();

    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
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
        <div className="flex gap-[4%]">
                    <div className="w-[48%]  mt-4">
                    </div>
                    <div className="w-[48%]  mt-4">
                    </div>
        </div>
        </form>
        </div>
    )
}