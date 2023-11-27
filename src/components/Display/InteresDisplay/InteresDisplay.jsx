import React, { useState } from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { CalculatorSolarFilled } from "../../../assets/icons/Calculator";
import { InfoSolarCircleOutline } from "../../../assets/icons/Information";
import { HeartSolarBold, HeartSolarLinear } from "../../../assets/icons/Heart";
import { FolderSolar } from "../../../assets/icons/Saved";
import Guardados from "../../Forms/Calculos/Interes/Guardados/Guardados";
import InteresesForm from "../../Forms/Calculos/Interes/Intereses/InteresesForm";

export default function Interes (){
    const [selected, setSelected] = useState("");
    const [heart, setHeart] = useState(false)
    const handleClickFav = (e) => {
      setHeart(!heart)
    };

    return (
        <div className="flex w-full flex-col">
            <Tabs 
                aria-label="Options"         
                selectedKey={selected}
                classNames={
                    {
                        tabList:"max-md:flex-wrap",
                    }
                }
                onSelectionChange={setSelected}
                fullWidth
                radius='sm'
                variant="solid"
                color="primary"
                >
                <Tab key="fired" className="px-0" title={
                    <div className="flex items-center space-x-2">
                    <span>Cálculo de Intereses</span>
                    </div>
                    }>
                <Card className="py-0 px-0" radius="sm" shadow="md" >
                    <CardHeader className="flex flex-row justify-between gap-3">
                                <div className="flex">
                                <div className="max-sm:hidden">
                                <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                                </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-lg text-left font-bold max-md:text-base">CALCULO DE INTERESES</p>
                                <p className="text-small text-default-500 text-left">2 min completado</p>
                                <p className="text-small text-default-500 text-left">10 Marzo 2020</p>
                            </div>
                        </div>
                        <div className="flex">
                        <Popover placement="right" backdrop="blur" offset={10}>
                            <PopoverTrigger>
                            <button>
                            <InfoSolarCircleOutline  width="1.5rem" height="1.5rem"/>
                            </button>
                            </PopoverTrigger>
                            <PopoverContent>
                            <div className="px-1 py-2 w-[150px]">
                                <div className="text-black text-small font-bold">Cálculo de intereses</div>
                                <div className="text-black text-tiny">Actualización de montos de acuerdo a diferentes tipos de tasas de interés.</div>
                            </div>
                            </PopoverContent>
                        </Popover>
                            {
                            !heart  ? <HeartSolarLinear width="1.5rem" height="1.5rem" className="cursor-pointer ml-2" onClick={handleClickFav}/>
                                    : <HeartSolarBold width="1.5rem" height="1.5rem" className="cursor-pointer ml-2" fill="red" onClick={handleClickFav}/>
                            }
                        </div>
                    </CardHeader>
                    <CardBody>
                            <InteresesForm/>
                    </CardBody>
                </Card>
                </Tab>
                <Tab key="saved" className="px-0" title={
                    <div className="flex items-center space-x-2">
                    <span>Guardados</span>
                    </div>
                    }>
                <Card className="py-0 px-0" radius="sm" shadow="md" >
                    <CardHeader className="flex flex-row justify-between gap-3">
                    <div className="flex">
                        <div className="max-sm:hidden">
                                <FolderSolar width="4.5rem" height="4.5rem"/>
                        </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg text-left font-bold max-md:text-base">GUARDADOS</p>
                                    <p className="text-small text-default-500 text-left">15 Octubre 2023</p>
                                </div>
                            </div>
                            <div className="flex">
                            <Popover placement="right" backdrop="blur" offset={10}>
                                <PopoverTrigger>
                                <button>
                                <InfoSolarCircleOutline  width="1.5rem" height="1.5rem"/>
                                </button>
                                </PopoverTrigger>
                                <PopoverContent>
                                <div className="px-1 py-2 w-[150px]">
                                    <div className="text-black text-small font-bold">Guardados</div>
                                    <div className="text-black text-tiny">Cálculos guardados de acuerdo a tu suscripción</div>
                                </div>
                                </PopoverContent>
                            </Popover>
                                {
                                !heart  ? <HeartSolarLinear width="1.5rem" height="1.5rem" className="cursor-pointer ml-2" onClick={handleClickFav}/>
                                        : <HeartSolarBold width="1.5rem" height="1.5rem" className="cursor-pointer ml-2" fill="red" onClick={handleClickFav}/>
                                }
                            </div>
                    </CardHeader>
                    <CardBody>
                        <Guardados></Guardados>
                    </CardBody>
                </Card>
                </Tab>
            </Tabs>
        </div>
    )
};