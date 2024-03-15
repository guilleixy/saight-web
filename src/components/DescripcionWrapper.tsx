import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { Eye, Volume2, Mic } from "react-feather";

export default function DescripcionWrapper(){
    return(
        <section id="descripcion" className="w-full pt-20 relative bg-dark-primary">
            <article className="bg-gradient-5 relative h-screen">
                <div className="md:px-24 px-11 h-full">
                    <Chip variant="bordered"><h2 className="text-xl p-2">Descripción</h2></Chip>
                    <h3 className="md:text-6xl py-3 text-3xl">
                        Qué es SAIGHT
                    </h3>
                    <div className="flex justify-center items-center h-full">
                        <div className="bg-dark-light rounded-xl md:w-1/2 md:p-10 p-5 mb-20">
                            <p>
                                <span className="bg-gradient-to-tr text-transparent bg-clip-text from-blue-500 via-purple-500 to-purple-400">SAIGHT</span> es una aplicación desarrollada en 
                                <span className="bg-gradient-to-tl from-yellow-400 to-blue-400 text-transparent bg-clip-text"> Python </span>
                                diseñada para ayudar a personas con discapacidades 
                                visuales. Utiliza el poder de la Inteligencia Artificial
                                para detectar objetos en tiempo real, proporcionando retroalimentación 
                                auditiva sobre el entorno.
                            </p>
                        </div>
                    </div>
                </div>
                <img draggable="false" src="/gradientcover.svg" alt="Gradient cover" className="w-full absolute bottom-0 left-0"/>
            </article>
            <article className="bg-dark-primary md:px-24 px-11 pt-12">
                <Chip variant="bordered"><h3>¿Cómo lo hace?</h3></Chip>
                <div className="flex gap-7 py-32 flex-wrap md:flex-nowrap items-center justify-center">
                    <div className="flex flex-col bg-gray-dark rounded-xl p-12 border-solid border-1 border-white/10">
                        <div>
                            <div className="bg-purple-800/70 rounded-full text-purple-300 inline-flex p-2 aspect-square">
                                <Eye className="inline-block"/>                            
                            </div>                            
                        </div>
                        <h4 className="pt-3">Visión</h4>
                        <p className="text-gray-300 pt-5">
                            Utiliza la cámara del dispositivo para capturar 
                            el entorno y detectar objetos.
                        </p>
                        <Link href="#detection" className="flex items-center pt-12 group hover:cursor-pointer text-blue-400">
                            Saber más
                            <svg className="ml-2 transition-transform duration-200 ease-in-out transform group-hover:translate-x-2" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" data-testid="Button-expandable-arrow">
                                <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                                <path className="" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round" style={{ strokeDasharray: 10, strokeDashoffset: 10, transition: 'stroke-dashoffset 0.3s ease-in-out' }}></path>
                            </svg>
                        </Link>
                    </div>  
                    <div className="flex flex-col bg-gray-dark rounded-xl p-12 border-solid border-1 border-white/10">
                        <div>
                            <div className="bg-purple-800/70 rounded-full text-purple-300 inline-flex p-2 aspect-square">
                                <Volume2 className="inline-block"/>                            
                            </div>                            
                        </div>
                        <h4 className="pt-3">Retroalimentación</h4>
                        <p className="text-gray-300 pt-5">
                            Proporciona retroalimentación auditiva sobre los 
                            objetos detectados.
                        </p>
                        <Link href="#tts" className="flex items-center pt-12 group hover:cursor-pointer text-blue-400">
                            Saber más
                            <svg className="ml-2 transition-transform duration-200 ease-in-out transform group-hover:translate-x-2" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" data-testid="Button-expandable-arrow">
                                <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                                <path className="" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round" style={{ strokeDasharray: 10, strokeDashoffset: 10, transition: 'stroke-dashoffset 0.3s ease-in-out' }}></path>
                            </svg>
                        </Link>
                    </div> 
                    <div className="flex flex-col bg-gray-dark rounded-xl p-12 border-solid border-1 border-white/10">
                        <div>
                            <div className="bg-purple-800/70 rounded-full text-purple-300 inline-flex p-2 aspect-square">
                                <Mic className="inline-block"/>                            
                            </div>                            
                        </div>
                        <h4 className="pt-3">Control</h4>
                        <p className="text-gray-300 pt-5">
                            Permite al usuario controlar la aplicación con 
                            comandos de voz.
                        </p>
                        <Link href="#stt" className="flex items-center pt-12 group hover:cursor-pointer text-blue-400">
                            Saber más
                            <svg className="ml-2 transition-transform duration-200 ease-in-out transform group-hover:translate-x-2" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" data-testid="Button-expandable-arrow">
                                <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                                <path className="" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round" style={{ strokeDasharray: 10, strokeDashoffset: 10, transition: 'stroke-dashoffset 0.3s ease-in-out' }}></path>
                            </svg>
                        </Link>
                    </div> 
                </div>
            </article>
        </section>
    )
}