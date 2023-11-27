import React, { useEffect } from "react";
import Navbarusers from "../../components/Navbar-users/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadcrumbsPanel from "../../components/BreadcrumbsPanel/BreadcrumbsPanel";
import CivilDisplay from "../../components/Display/CivilDisplay/CivilDisplay";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Civil () {
    useEffect(() => {
        console.log('componente montado')
    }, [])

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <Navbarusers></Navbarusers>
                <BreadcrumbsPanel></BreadcrumbsPanel>
            </div>
                <div className="flex justify-between gap-[5%]">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div  className="flex w-full min-h-[80vh]">
                <div className="w-full">
                    <CivilDisplay/>
                </div>
                </div>
            </div>
                <Footer></Footer>
        </div>
    )
}