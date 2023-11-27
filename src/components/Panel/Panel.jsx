import React, { useState } from "react";
import Display from "../Display/Display";
import Sidebar from "../Sidebar/Sidebar";

export default function Panel ({sidebarCollapsed}) {
    return (
        <div className="flex justify-between gap-[5%]">
            <div>
                <Sidebar sidebarCollapsed={sidebarCollapsed}></Sidebar>
            </div>
            <div  className="flex w-full min-h-[80vh]">
                <Display></Display>
            </div>
        </div>
    )
}