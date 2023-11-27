import React, { useState } from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { CalculatorSolarFilled } from "../../../assets/icons/Calculator";
import { InfoSolarCircleOutline } from "../../../assets/icons/Information";
import { HeartSolarBold, HeartSolarLinear } from "../../../assets/icons/Heart";
import { FolderSolar } from "../../../assets/icons/Saved";
import Reparable from "../../Forms/Calculos/Civil/Reparables/Reparables";
import Irreparable from "../../Forms/Calculos/Civil/Irreparables/Irreparables";
import Compensacion from "../../Forms/Calculos/Civil/Compensacion/Compensacion";
import Danos from "../../Forms/Calculos/Civil/Danos/Danos";

import Guardados from "../../Forms/Calculos/Civil/Guardados/Guardados";

export default function Civil (){
    const [selected, setSelected] = useState("");
    const [selectedPunitivos, setSelectedPunitivos] = useState("");
    const [heart, setHeart] = useState(false)
    const handleClickFav = (e) => {
      setHeart(!heart)
    };

    return (
        <div className="flex w-full flex-col">
                <Tabs 
                classNames={
                    {
                        tabList:"max-md:flex-wrap",
                    }
                }
                aria-label="Options"         
                selectedKey={selected}
                fullWidth
                radius='sm'
                variant="solid"
                color="primary"
                onSelectionChange={setSelected}
                >
                <Tab key="fired" className="px-0" title={
                    <div className="flex items-center space-x-2">
                    <span>Daños Punitivos</span>
                    </div>
                    }>
                
                    <Tabs
                    fullWidth
                    radius='sm'
                    aria-label="Options"         
                    selectedKey={selectedPunitivos}
                    onSelectionChange={setSelectedPunitivos}
                    variant="solid"
                    color="primary"
                    >
                
                        <Tab key="rep" className="px-0" title={
                            <div className="flex items-center space-x-2">
                            <span>Daños Reparables</span>
                            </div>
                            }>
                                <Card className="py-0 px-0" radius="sm" shadow="md" >
                                <CardHeader className="flex flex-row justify-between gap-3">
                                            <div className="flex">
                                            <div className="max-sm:hidden">
                                            <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                                            </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-lg text-left font-bold max-md:text-base">CALCULO DAÑOS REPARABLES</p>
                                            <p className="text-small text-default-500 text-left">3 min completado</p>
                                            <p className="text-small text-default-500 text-left">11 Octubre 2021</p>
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
                                        <div className="text-black text-small font-bold">Cálculo de daños punitivos</div>
                                            <div className="text-black text-tiny">Cálculo de daños punitivos para daños de carácter reparables.</div>
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
                                    <Reparable/>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="notRep" className="px-0" title={
                            <div className="flex items-center space-x-2">
                            <span>Daños Irreparables</span>
                            </div>
                            }>
                                <Card className="py-0 px-0" radius="sm" shadow="md" >
                                <CardHeader className="flex flex-row justify-between gap-3">
                                            <div className="flex">
                                            <div className="max-sm:hidden">
                                        <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                                                </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-lg text-left font-bold max-md:text-base">CALCULO DAÑOS IRREPARABLES</p>
                                            <p className="text-small text-default-500 text-left">3 min completado</p>
                                            <p className="text-small text-default-500 text-left">11 Octubre 2021</p>
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
                                            <div className="text-black text-small font-bold">Cálculo de daños punitivos</div>
                                            <div className="text-black text-tiny">Cálculo de daños punitivos para daños de carácter irreparables.</div>
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
                                    <Irreparable/>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>

                </Tab>
                <Tab key="comp" className="px-0" title={
                    <div className="flex items-center space-x-2">
                    <span>Compensación Económica</span>
                    </div>
                    }>
                                <Card className="py-0 px-0" radius="sm" shadow="md" >
                                <CardHeader className="flex flex-row justify-between gap-3">
                                            <div className="flex">
                                            <div className="max-sm:hidden">
                                        <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                                                </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-lg text-left font-bold max-md:text-base">CALCULO COMPENSACION ECONOMICA</p>
                                            <p className="text-small text-default-500 text-left">12 min completado</p>
                                            <p className="text-small text-default-500 text-left">11 Octubre 2021</p>
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
                                            <div className="text-black text-small font-bold">Cálculo de compensación económica</div>
                                            <div className="text-black text-tiny">Cálculo de compensación económica de acuerdo arts. 441 y 524 CCCN.</div>
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
                                    <Compensacion></Compensacion>
                                </CardBody>
                            </Card>
                </Tab>
                <Tab key="mendez" className="px-0" title={
                    <div className="flex items-center space-x-2">
                    <span>Daños y Perjuicios</span>
                    </div>
                    }>
                                            <Tabs
                                            fullWidth
                                            radius='sm'
                                            aria-label="Options"         
                                            selectedKey={selectedPunitivos}
                                            onSelectionChange={setSelectedPunitivos}
                                            variant="solid"
                                            color="primary"
                                            >
                                                <Tab key="mendez" className="px-0" title={
                                                <div className="flex items-center space-x-2">
                                                <span>'Mendez'</span>
                                                </div>
                                                }>
                                                    <Card className="py-0 px-0" radius="sm" shadow="md" >
                                                    <CardHeader className="flex flex-row justify-between gap-3">
                                                                <div className="flex">
                                                                <div className="max-sm:hidden">
                                                            <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                                                                </div>
                                                            <div className="flex flex-col justify-center">
                                                                <p className="text-lg text-left font-bold max-md:text-base">CALCULO DAÑOS Y PERJUICIOS ('MENDEZ')</p>
                                                                <p className="text-small text-default-500 text-left">10 min completado</p>
                                                                <p className="text-small text-default-500 text-left">11 Octubre 2021</p>
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
                                                                <div className="text-black text-small font-bold">Cálculo de daños y perjuicios</div>
                                                                <div className="text-black text-tiny">Cálculo de daños y perjuicios de acuerdo al fallo "Mendez".</div>
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
                                                            <Danos type="mendez"></Danos>
                                                    </CardBody>
                                                </Card>
                                                </Tab>
                                                <Tab key="vouto" className="px-0" title={
                                                <div className="flex items-center space-x-2">
                                                <span>'Vouto'</span>
                                                </div>
                                                }>
                                                    <Card className="py-0 px-0" radius="sm" shadow="md" >
                                                    <CardHeader className="flex flex-row justify-between gap-3">
                                                                <div className="flex">
                                                                <div className="max-sm:hidden">
                                                            <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                                                                </div>
                                                            <div className="flex flex-col justify-center">
                                                                <p className="text-lg text-left font-bold max-md:text-base">CALCULO DAÑOS Y PERJUICIOS ('VUOTO')</p>
                                                                <p className="text-small text-default-500 text-left">10 min completado</p>
                                                                <p className="text-small text-default-500 text-left">11 Octubre 2021</p>
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
                                                            <div className="text-black text-small font-bold">Cálculo de daños y perjuicios</div>
                                                                <div className="text-black text-tiny">Cálculo de daños y perjuicios de acuerdo al fallo "Vuoto".</div>
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
                                                    <Danos type="vuoto"></Danos>
                                                    </CardBody>
                                                </Card>
                                                </Tab>
                                            </Tabs>
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
                                    <p className="text-small text-default-500 text-left">10 Octubre 2023</p>
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