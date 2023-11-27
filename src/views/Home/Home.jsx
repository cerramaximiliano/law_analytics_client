import React, { useState } from "react";
import Navbarusers from "../../components/Navbar-users/Navbar";
import Footer from "../../components/Footer/Footer";
import Panel from "../../components/Panel/Panel";
import BreadcrumbsPanel from "../../components/BreadcrumbsPanel/BreadcrumbsPanel";

export default function Home () {
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
                <Panel sidebarCollapsed={sidebarCollapsed}></Panel>
                <Footer></Footer>
        </div>
    )
}