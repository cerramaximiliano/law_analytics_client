import React from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import useDisplayComponent from "../../hooks/useDisplayComponent";

export default function Display ({display}) {
    const componentToRender = useDisplayComponent(display);
    return (
        <div className="w-full">
            {componentToRender}
        </div>
    )
};