import React, { useState } from "react";
import Navbarusers from "../../components/Navbar-users/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadcrumbsPanel from "../../components/BreadcrumbsPanel/BreadcrumbsPanel";
import InteresDisplay from "../../components/Display/InteresDisplay/InteresDisplay";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Interes () {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <Navbarusers toggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
                <BreadcrumbsPanel></BreadcrumbsPanel>
            </div>
                <div className="flex justify-between gap-[5%]">
                <div>
                    <Sidebar sidebarCollapsed={sidebarCollapsed}></Sidebar>
                </div>
                <div  className="flex w-full min-h-[80vh]">
                <div className="w-full">
                    <InteresDisplay/>
                </div>
                </div>
            </div>
                <Footer></Footer>
        </div>
    )
}