"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
export default function Hero(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Características",
        "Desarrollo",
        "FAQs",
        "por Guillermo Bernal",
    ];
    return(
        <header className="bg-hero-gradient">
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="bg-black-100">
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">SAIGTH</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                <Link color="foreground" href="#caracteristicas">
                    Características
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link href="#desarrollo" aria-current="page">
                    Desarrollo
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#">
                    FAQs
                </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Guillermo Bernal</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-black-100">
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="w-full"
                    href="#"
                    size="lg"
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        <div className="h-screen w-full flex justify-center items-center">
            <h1 className="text-5xl text-center">
                <span className="bg-gradient-to-tr from-green-200 via-purple-300 to-blue-200 text-transparent bg-clip-text">
                    sAIgth
                </span>
                <br />
                (aqui el eslogan)
            </h1>
        </div>          
        <div className="h-screen w-full flex justify-center items-center">
            (aquí irá el vídeo y todo eso)
        </div>  
        </header>

    )
}