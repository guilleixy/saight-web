import React from "react";
import {Card, CardBody} from "@nextui-org/react";

export default function CardItem() {
    return (
        <Card
        isBlurred
        className="border-none bg-black-100 max-w-[610px]"
        shadow="sm"
        >
            <CardBody>
                hola
            </CardBody>
        </Card>
    );
}
