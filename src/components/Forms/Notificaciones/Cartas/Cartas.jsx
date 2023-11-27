import React, { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {Button, Input, Checkbox, Switch, Select, SelectItem, Divider} from "@nextui-org/react";
import useFormValidation from "../../../../hooks/useFormValidation";
import Loader from "../../../Loader/Loader";
import User from "../../../../assets/icons/User.jsx"

export default function Cartas (){
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const { handleInputChange, validateSubmit, handleChecked } = useFormValidation(errors, setErrors, form, setForm);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const validate = validateSubmit(event);

        if( Object.keys(validate).length === 0 ) {
            deleteObjectEmptyStrings(form)
            if(currentStep === 1){
                setCurrentStep(currentStep + 1);

            }else{
                console.log('hacer calculo')
            }
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
                
        </div>
        </form>

        </div>
    )
};