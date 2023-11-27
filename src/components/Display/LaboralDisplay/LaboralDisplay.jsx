import React, { useState } from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import DespidoForm from "../../Forms/Calculos/Laboral/DespidoForm/DespidoForm";
import LiquidacionForm from "../../Forms/Calculos/Laboral/LiquidacionForm/LiquidacionForm";
import IndemnizacionesEspeciales from "../../Forms/Calculos/Laboral/IndemnizacionesEspeciales/IndemnizacionesEspeciales";
import Guardados from "../../Forms/Calculos/Laboral/Guardados/Guardados";
import Contenidos from "../../Forms/Calculos/Laboral/Contenidos/Contenidos";
import { CalculatorSolarFilled } from "../../../assets/icons/Calculator";
import {HeartSolarLinear, HeartSolarBold} from '../../../assets/icons/Heart';
import {BookSolar2BoldDuotone} from '../../../assets/icons/Books'
import {InfoSolarCircleOutline} from '../../../assets/icons/Information';
import {FolderSolar} from  '../../../assets/icons/Saved';

export default function Laboral (){
    const [selected, setSelected] = useState("photos");
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
              <span>Despido sin Causa</span>
            </div>
          }>
            <Card className="py-0 px-0" radius="sm" shadow="md" >
              <CardHeader className="flex flex-row justify-between gap-3">
                <div className="flex">
                  <div className="max-sm:hidden">
                  <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                  </div>
                  <div className="flex flex-col justify-center">  
                    <p className="text-lg text-left font-bold max-md:text-base">CALCULO DESPIDO SIN CAUSA</p>
                    <p className="text-small text-default-500 text-left">5 min completado</p>
                    <p className="text-small text-default-500 text-left">15 Junio 2021</p>
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
                    <div className="text-black text-small font-bold">Cáculo por Despido</div>
                    <div className="text-black text-tiny">Cálculo de indemnización, liquidación final, multas y otras sumas originadas en el despido conforme ley 20.744.</div>
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
                <DespidoForm></DespidoForm>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="account" className="px-0" title={
            <div className="flex items-center space-x-2">
              <span>Liquidación Final</span>
            </div>
          }>
            <Card radius="sm" shadow="md">
            <CardHeader className="flex flex-row justify-between gap-3">
                <div className="flex">
                <div className="max-sm:hidden">
                  <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-lg text-left font-bold max-md:text-base">CALCULO LIQUIDACION FINAL</p>
                    <p className="text-small text-default-500 text-left">2 min completado</p>
                    <p className="text-small text-default-500 text-left">2 Junio 2021</p>
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
                    <div className="text-black text-small font-bold">Cáculo de Liquidación Final</div>
                    <div className="text-black text-tiny">Cálculo originado a partir de un despido sin causa o renuncia según Ley 20.744.</div>
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
                <LiquidacionForm/>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="others" className="px-0" title={
            <div className="flex items-center space-x-2">
              <span>Indeminizaciones Especiales</span>
            </div>
          }>
            <Card  radius="sm" shadow="md">
            <CardHeader className="flex flex-row justify-between gap-3">
                <div className="flex">
                <div className="max-sm:hidden">
                  <CalculatorSolarFilled width="4.5rem" height="4.5rem"></CalculatorSolarFilled>
                </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-lg text-left font-bold max-md:text-base">INDEMNIZACIONES ESPECIALES</p>
                    <p className="text-small text-default-500 text-left">4 min completado</p>
                    <p className="text-small text-default-500 text-left">18 Junio 2021</p>
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
                    <div className="text-black text-small font-bold">Cáculo de Indeminizaciones Especiales</div>
                    <div className="text-black text-tiny">Cálculo de indemnizaciones de personal de la construcción -ley 22.250-, doméstico -ley 26.844-</div>
                  </div>
                </PopoverContent>
            </Popover>
                {
                  !heart  ? <HeartSolarLinear width="2rem" height="1.5rem" className="cursor-pointer ml-2" onClick={handleClickFav}/>
                          : <HeartSolarBold width="2rem" height="1.5rem" className="cursor-pointer ml-2" fill="red" onClick={handleClickFav}/>
                }
              </div>
              </CardHeader>
              <CardBody>
                <IndemnizacionesEspeciales/>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="contents" className="px-0" title={
            <div className="flex items-center space-x-2">
              <span>Contenidos</span>
            </div>
          }>
            <Card  radius="sm">
            <CardHeader className="flex flex-row justify-between gap-3">
                <div className="flex">
                <div className="max-sm:hidden">
                  <BookSolar2BoldDuotone width="4.5rem" height="4.5rem"></BookSolar2BoldDuotone>
                </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-lg text-left font-bold max-md:text-base">CONTENIDOS</p>
                    <p className="text-small text-default-500 text-left">4 min completado</p>
                    <p className="text-small text-default-500 text-left">15 Marzo 2022</p>
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
                    <div className="text-black text-small font-bold">Contenidos</div>
                    <div className="text-black text-tiny">Contenidos dispuestos por la plataforma y aportes de usuarios</div>
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
                <Contenidos></Contenidos>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="saved"  className="px-0" title={
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
    );
};