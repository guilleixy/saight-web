"use client"

import {Chip} from "@nextui-org/react";
import { Image as Img } from "@nextui-org/react";
import Image from "next/image";
import Detection from "../Detection";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function BentoWrapper(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <section ref={ref} id="caracteristicas" className="md:px-24 px-11 w-full pt-20">
            <Chip variant="bordered"><h2 className="text-xl p-2">Características</h2></Chip>
            <h3 className="md:text-6xl py-3 text-3xl">
                Qué ofrece SAIGHT
            </h3>
            <div className="flex flex-col gap-8 w-full py-28">
                <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                    <article className="w-full md:w-3/5 bg-gradient-1 rounded-3xl p-8 md:p-12"
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                            }}
                    >
                        <h4 className="md:text-4xl text-2xl">
                            Detección de objetos en tiempo real
                        </h4>
                        <p className="text-gray-200 text-xl">A través de la cámara del móvil identifica cosas del entorno</p>
                    </article>
                    <article className="w-full md:w-2/5 bg-gradient-2 rounded-3xl flex justify-end flex-col p-8 md:p-12"
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                            }}
                    >
                    
                        <h4 className="md:text-4xl text-2xl py-2">
                            Control mediante comandos de voz
                        </h4>
                        <p className="text-gray-400 text-xl">Asistente personal con ChatGPT integrado</p>
                    </article>
                </div>
                <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                    <article className="w-full md:w-2/5 bg-gradient-3 rounded-3xl p-8 md:p-12 flex flex-col justify-end"
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                            }}
                    >
                        <h4 className="md:text-4xl text-2xl">
                            Síntesis de voz con Text to Speech
                        </h4>
                        <p className="text-gray-400 text-xl">Saight genera una respuesta por voz al instante</p>
                    </article>
                    <article className="w-full md:w-3/5 bg-gradient-1 rounded-3xl p-8 md:p-12"
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
                            }}
                    >
                        <h4 className="md:text-4xl text-2xl">
                            Transcripción de voz a texto en tiempo real
                        </h4>
                        <p className="text-gray-200 text-xl">Detecta e interpreta lo que dices</p>
                    </article>
                </div>
                <article className="w-full bg-black grid-item-heigth rounded-3xl gap-6 p-8 md:p-12 flex relative md:flex-nowrap flex-wrap"
                    style={{
                        transform: isInView ? "none" : "translateX(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
                        }}
                >
                    <div className="grow">
                        <h4 className="md:text-4xl text-2xl">
                            Detección de objetos avanzada
                        </h4>
                        <p className="text-gray-400 text-xl">Permite analizar detalladamente frames gracias a la tecnología de Amazon Rekognition</p>                           
                    </div>
                    {/* <Detection height={150} width={200} color="purple-500" src="/space-robot-cat.png" id="1" name="Cat" classes="absolute -bottom-4 left-0"/> */}
                    <Img
                    className="roundex-3xl"
                    width={800}
                    height={600}
                    alt="Rekognition Example Image"
                    src={"/saightdemo2.jpg"}
                    />
                </article>             
            </div>

        </section> 
    )
}