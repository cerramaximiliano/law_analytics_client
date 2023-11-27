import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { SolarCloseSquareBoldDuotone } from "../../assets/icons/Close";
import { SolarHamburgerMenuBoldDuotone } from "../../assets/icons/Hamburguer";

export default function Navbarusers({ toggleSidebar, sidebarCollapsed }) {

    return (
        <Navbar>
          <NavbarContent>
            <button onClick={toggleSidebar} className={`fixed left-4 rotate-icon ${sidebarCollapsed ? 'rotated' : ''}`}>
                        {sidebarCollapsed ? <SolarCloseSquareBoldDuotone width="2rem" height="2rem" /> : <SolarHamburgerMenuBoldDuotone width="2rem" height="2rem" />}
            </button>
          </NavbarContent>
          <NavbarBrand>

          </NavbarBrand>
      
          <NavbarContent justify="end">

          </NavbarContent>
        </Navbar>
    )
};