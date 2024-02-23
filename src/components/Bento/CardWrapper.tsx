"use client"
import Image from 'next/image'
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function CardWrapper(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <section ref={ref} className="w-full md:px-24 px-11 py-16 bg-strong-primary relative">
            <h3 className="md:text-6xl text-3xl z-10 relative">Más características</h3>
            <h4 className="py-2 text-gray-400 z-10 relative">De la detección de objetos avanzada</h4>
            <div className="flex my-10 flex-wrap gap-6 md:flex-nowrap">
                <div
                    style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                    className="backdrop-blur-sm rounded-3xl md:w-1/3 w-full border-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                    <h4 className='md:text-4xl text-2xl'>Búsqueda de rostros</h4>
                    <p className='text-gray-300'>
                        Buscar coincidencias con rostros almacenados.
                    </p>
                </div>           
                <div
                    style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                        }} 
                    className="backdrop-blur-sm rounded-3xl md:w-1/3 w-full border-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                    <h4 className='md:text-4xl text-2xl'>Análisis facial</h4>
                    <p className='text-gray-300'>
                        Análisis de emociones, edad, género, etc. 
                    </p>
                </div>    
                <div
                    style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
                        }} 
                    className="backdrop-blur-sm rounded-3xl md:w-1/3 w-full bg-card-pr-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                    <h4 className='md:text-4xl text-2xl'>Texto en imágenes</h4>
                    <p className='text-gray-300'>
                        Capaz de extraer texto de imágenes reales como carteles, camisetas, etc.
                    </p>
                </div>             
            </div>
            <Image src={"/productivity-bg-2.webp"} alt="Decoration" height={225} width={471} className="absolute top-0 left-0 z-0"/>
            <Image src={"/productivity-bg-1.webp"} alt="Decoration" height={225} width={471} className="absolute bottom-0 z-0"/>
        </section>    
    )
}