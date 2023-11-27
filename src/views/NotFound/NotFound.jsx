import React, { useState } from "react";
import Navbarusers from "../../components/Navbar-users/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadcrumbsPanel from "../../components/BreadcrumbsPanel/BreadcrumbsPanel";
import Sidebar from "../../components/Sidebar/Sidebar";
import RouteNotFound from "../../components/Content/RouteNotFound";
import {Tabs, Tab, Card, CardBody, CardHeader, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function NotFound () {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };
    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <Navbarusers  toggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} ></Navbarusers>
                <BreadcrumbsPanel></BreadcrumbsPanel>
            </div>
                <div className="flex justify-between gap-[5%]">
                <div>
                    <Sidebar sidebarCollapsed={sidebarCollapsed}></Sidebar>
                </div>
                <div  className="flex w-full min-h-[80vh]">
                <div className="w-full flex h-full justify-center">
                    <Card 
                    radius="sm"
                    className="py-0 px-0 w-full"
                    shadow="md"
                    >
                        <RouteNotFound/>
                    </Card>
                </div>
                </div>
            </div>
                <Footer></Footer>
        </div>
    )
}