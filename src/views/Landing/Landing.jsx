import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Landing () {

    return (
        <div className="flex flex-col h-full justify-between">
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    )
};