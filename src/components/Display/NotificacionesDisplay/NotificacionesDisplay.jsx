import React, { useState } from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {HeartSolarLinear, HeartSolarBold} from '../../../assets/icons/Heart';
import {InfoSolarCircleOutline} from '../../../assets/icons/Information';
import { SolarFileTextBoldDuotone } from "../../../assets/icons/Files";
import { FolderSolar } from "../../../assets/icons/Saved";
import Telegrama from "../../Forms/Notificaciones/Telegrama/Telegrama";
import Cartas from "../../Forms/Notificaciones/Cartas/Cartas";
import Guardados from "../../Forms/Notificaciones/Guardados/Guardados";


export default function NotificacionesDisplay (){
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
                    <span>Telegramas</span>
                    </div>
                }>
                                    <Card className="py-0 px-0" radius="sm" shadow="md" >
                                        <CardHeader className="flex flex-row justify-between gap-3">
                                            <div className="flex">
                                            <div className="max-sm:hidden">
                                                <SolarFileTextBoldDuotone  width="4.5rem" height="4.5rem"/>
                                            </div>

                                            <div className="flex flex-col justify-center">  
                                                <p className="text-lg text-left font-bold max-md:text-base">TELEGRAMAS LEY 23.789</p>
                                                <p className="text-small text-default-500 text-left">7 min completado</p>
                                                <p className="text-small text-default-500 text-left">10 Octubre 2021</p>
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
                                                <div className="text-black text-small font-bold">Telegrama Ley 23.789</div>
                                                <div className="text-black text-tiny">Formulario para completar telegrama según ley 23.789 sobre modelo original.</div>
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
                                            <Telegrama></Telegrama>
                                        </CardBody>
                                        </Card>
                </Tab>

                <Tab key="fired2" className="px-0" title={
                    <div className="flex items-center space-x-2">
                    <span>Cartas Documento</span>
                    </div>
                }>
                                        <Card className="py-0 px-0" radius="sm" shadow="md" >
                                        <CardHeader className="flex flex-row justify-between gap-3">
                                            <div className="flex">
                                            <div className="max-sm:hidden">
                                                <SolarFileTextBoldDuotone  width="4.5rem" height="4.5rem"/>
                                            </div>
                                            <div className="flex flex-col justify-center">  
                                                <p className="text-lg text-left font-bold max-md:text-base">CARTAS DOCUMENTO</p>
                                                <p className="text-small text-default-500 text-left">7 min completado</p>
                                                <p className="text-small text-default-500 text-left">10 Octubre 2021</p>
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
                                                <div className="text-black text-small font-bold">Cartas Documento</div>
                                                <div className="text-black text-tiny">Formulario para completar cartas documento Correo Argentino y OCA.</div>
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
                                            <Cartas></Cartas>
                                        </CardBody>
                                        </Card>
                </Tab>

                <Tab key="saved" className="px-0" title={
                    <div className="flex items-center space-x-2">
                    <span>Guardados</span>
                    </div>
                }>
                                                        <Card  radius="sm">
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
                                                            <Guardados/>
                                                        </CardBody>
                                                        </Card>  
                </Tab>

            </Tabs>
        </div>
    )

}