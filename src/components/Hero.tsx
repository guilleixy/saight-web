"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
import HeroVideo from "./HeroVideo";
import HeroCarrousel from "./HeroCarrousel";
import Detection from "./Detection";
export default function Hero(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Descripción",
        "Características",
        "Desarrollo",
        "por Guillermo Bernal",
    ];
    const menuLinks = [
        "#descripcion",
        "#caracteristicas",
        "#desarrollo",
        "https://www.gbernal.dev/"
    ]
    return(
        <header className="bg-hero-gradient h-lvh relative bg-bottom overflow-x-hidden overflow-y-hidden">
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="bg-black-100">
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">SAIGHT</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                <Link color="foreground" href="#descripcion">
                    Descripción
                </Link>
                </NavbarItem>
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
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://www.linkedin.com/in/guillermo-bernal-b0515b285/" target="_blank">Guillermo Bernal</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-black-100">
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        "foreground"
                        // index === 2 ? "primary" : index === menuItems.length - 1 ? "success" : "foreground"
                    }
                    className="w-full"
                    href={menuLinks[index]}
                    size="lg"
                    onClick={(event) => {
                        setIsMenuOpen(false);
                    }}
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        <div className="w-full flex justify-center items-center md:h-auto h-full md:pt-64 md:pb-20 flex-col overflow-y-hidden">
            <h1 className="text-5xl text-center">
                S
                <span className="bg-gradient-to-tr from-blue-500 via-purple-500 to-purple-400 text-transparent bg-clip-text">
                    AI
                </span>
                GHT
                <br />
                <span className="text-7xl">Descubre sin límites</span>
            </h1>
            <h2 className="text-4xl text-center">un mundo más accesible</h2>
            <Link href="#descripcion" className="text-black bg-white rounded-md px-10 py-2 mt-5 flex items-center justify-center group hover:cursor-pointer">
                Quiero saber más
                <svg className="ml-2 transition-transform duration-200 ease-in-out transform group-hover:translate-x-2" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" data-testid="Button-expandable-arrow">
                    <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path className="" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round" style={{ strokeDasharray: 10, strokeDashoffset: 10, transition: 'stroke-dashoffset 0.3s ease-in-out' }}></path>
                </svg>
            </Link>
        </div>          
        {/* <div className="h-screen w-full flex justify-center items-center md:px-10 px:10">
            <HeroVideo />
        </div>   */}
        {/* <HeroCarrousel /> */}
        {/* <Detection color="green-400" src="/space-robot-ai.png" id="1" name="Robot" height={100} width={300} classes="absolute -bottom-6 right-10"/> */}
        </header>

    )
}