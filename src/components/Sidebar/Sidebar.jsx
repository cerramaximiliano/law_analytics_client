import React, { useEffect, useRef, useState } from "react";
import {Accordion, AccordionItem, Tooltip} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import { SolarHamburgerMenuBoldDuotone, SolarHamburgerMenuOutline } from "../../assets/icons/Hamburguer";
import { SolarCloseSquareBoldDuotone } from "../../assets/icons/Close";
import { SolarSettingsBoldDuotone } from "../../assets/icons/Settings";
import { SolarCard2BoldDuotone } from "../../assets/icons/Card";
import {SolarUserIdBoldDuotone} from  "../../assets/icons/Account";
import {SolarAddFolderBoldDuotone, SolarFolderWithFilesBoldDuotone} from "../../assets/icons/Folders";
import {SolarLogout2BoldDuotone} from  "../../assets/icons/Logout";
import {SolarCalendarBoldDuotone} from "../../assets/icons/Calendar";
import { SolarListHeartBoldDuotone } from "../../assets/icons/Heart";
import { SolarBuildings2BoldDuotone } from "../../assets/icons/Buildings";
import { SolarBook2BoldDuotone } from "../../assets/icons/Books";
import { SolarGlassesLineDuotone } from "../../assets/icons/Glasses";
import { SolarChatSquare2BoldDuotone } from "../../assets/icons/Maths";
import { SolarLetterBoldDuotone } from "../../assets/icons/Notifications";


export default function Sidebar({ sidebarCollapsed }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1200);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <div className={`px-4 shadow-medium bg-content1 w-full rounded-small sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
                <Accordion  
                showDivider={true} 
                variant="shadow" 
                className="px-0 shadow-none"
                >
                <AccordionItem 
                key="1" 
                aria-label="Accordion 1" 
                title="Carpetas" 
                className="text-medium"
                indicator={
                    sidebarCollapsed || isMobile 
                    ? ({ isOpen }) => (isOpen ? <SolarCloseSquareBoldDuotone width="2rem" height="2rem" /> : <SolarHamburgerMenuBoldDuotone width="2rem" height="2rem" />)
                    : ''
                }
                startContent={
                    <SolarHamburgerMenuBoldDuotone width="2rem" height="2rem"/>
                }
                >
                    <div className="flex mb-1 cursor-pointer">
                        <a href="#">
                        <SolarAddFolderBoldDuotone width="1.5rem" height="1.5rem" />
                        </a>
                    <div className="flex justify-center ml-2 cursor:pointer">
                        <Link href="#" size="sm text-medium"  color="foreground">Nueva</Link>
                    </div>
                    </div>


                    
                    <div className="flex mb-1 cursor-pointer">
                        <a href="#">
                        <SolarFolderWithFilesBoldDuotone width="1.5rem" height="1.5rem" />
                        </a>
                    <div className="flex justify-center ml-2">
                        <Link href="#" size="sm text-medium"  color="foreground">Guardadas</Link>
                    </div>
                    </div>

                </AccordionItem>
                <AccordionItem 
                key="2" 
                aria-label="Accordion 2" 
                title="Cálculos" 
                className="text-medium"
                indicator={
                    sidebarCollapsed || isMobile
                    ? ({ isOpen }) => (isOpen ? <SolarCloseSquareBoldDuotone width="2rem" height="2rem" /> : <SolarHamburgerMenuBoldDuotone width="2rem" height="2rem" />)
                    : ''
                }
                startContent={
                    <SolarHamburgerMenuBoldDuotone width="2rem" height="2rem"/>
                }
                >
                    <div className="flex mb-1 cursor-pointer">
                        <a href="/laboral">
                        <SolarBuildings2BoldDuotone width="1.5rem" height="1.5rem"/>
                        </a>
                        <div className="flex justify-center ml-2">
                            <Link href="/laboral" size="sm" color="foreground">Laborales</Link>
                        </div>
                    </div>

                    <div className="flex mb-1 cursor-pointer">
                        <a href="/civil">
                        <SolarBook2BoldDuotone  width="1.5rem" height="1.5rem"/>
                        </a>
                        <div className="flex justify-center ml-2">
                        <Link href="/civil" size="sm" color="foreground">Civiles</Link>
                        </div>
                    </div>
                    <div className="flex mb-1 cursor-pointer">
                        <a href="/previsional">
                        <SolarGlassesLineDuotone width="1.5rem" height="1.5rem"/>
                        </a>
                        <div className="flex justify-center ml-2">
                        <Link href="/previsional" size="sm" color="foreground">Previsionales</Link>
                        </div>
                    </div>
                    <div className="flex mb-1 cursor-pointer">
                        <a href="/interes">
                        <SolarChatSquare2BoldDuotone width="1.5rem" height="1.5rem"/>
                        </a>
                        <div className="flex justify-center ml-2">
                        <Link href="/interes" size="sm" color="foreground">Intereses</Link>
                        </div>
                    </div>
                </AccordionItem>

                <AccordionItem 
                key="3" 
                aria-label="Accordion 3" 
                title="Configuración" 
                className="text-medium"
                indicator={
                    sidebarCollapsed || isMobile
                    ? ({ isOpen }) => (isOpen ? <SolarCloseSquareBoldDuotone width="2rem" height="2rem" /> : <SolarHamburgerMenuBoldDuotone width="2rem" height="2rem" />)
                    : ''
                }
                startContent={
                    <SolarSettingsBoldDuotone width="2rem" height="2rem"/>
                }
                >
                    <div className="flex mb-1">
                        <a href="#">
                        <SolarUserIdBoldDuotone width="1.5rem" height="1.5rem"/>
                        </a>
                        <div className="flex justify-center ml-2">
                            <Link href="#" size="sm" color="foreground">Cuenta</Link>
                        </div>
                    </div>
                    <div className="flex mb-1">
                        <a href="#">
                        <SolarCard2BoldDuotone width="1.5rem" height="1.5rem"/>
                        </a>
                        <div className="flex justify-center ml-2">
                            <Link href="#" size="sm" color="foreground">Suscripción</Link>
                        </div>
                    </div>
                </AccordionItem>
                </Accordion>

                <div className="flex py-4 w-full h-full gap-3 items-center tap-highlight-transparent outline-none cursor-pointer">
                    <a href="#">
                        <SolarCalendarBoldDuotone width="2rem" height="2rem"/>
                    </a>
                        <div className="flex justify-center ml-2">
                            <Link className="text-large" href="/calendario" color="foreground">Calendario</Link>
                        </div>
                </div>
                
                
                <div className="flex py-4 w-full h-full gap-3 items-center tap-highlight-transparent outline-none cursor-pointer">
                    <a href="#">
                        <SolarLetterBoldDuotone width="2rem" height="2rem"/>
                    </a>
                        <div className="flex justify-center ml-2">
                            <Link className="text-large" href="/notificaciones" color="foreground">Notificaciones</Link>
                        </div>
                </div>
                

                <div className="flex py-4 w-full h-full gap-3 items-center tap-highlight-transparent outline-none cursor-pointer">
                    <a href="#">
                        <SolarListHeartBoldDuotone width="2rem" height="2rem"/>
                    </a>
                        <div className="flex justify-center ml-2">
                            <Link className="text-large" href="/favoritos" color="foreground">Favoritos</Link>
                        </div>
                </div>


                <div className="flex py-4 w-full h-full gap-3 items-center tap-highlight-transparent outline-none cursor-pointer">
                    <a href="#">
                        <SolarLogout2BoldDuotone width="2rem" height="2rem"/>
                    </a>
                        <div className="flex justify-center ml-2">
                            <Link className="text-large" href="#" color="foreground">Salir</Link>
                        </div>
                </div>


        </div>
    )
}