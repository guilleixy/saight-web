import {Chip} from "@nextui-org/react";
import { Image as Img } from "@nextui-org/react";
import Image from "next/image";
import Detection from "./Detection";

export default function BentoGrid(){
    return(
        <div className="py-44">
             {/* w-full max-w-screen-2xl */}
            <section className="md:px-24 px-11 w-full">
                <Chip variant="bordered"><h2 className="text-xl p-2">Características</h2></Chip>
                <h3 className="md:text-6xl py-3 text-3xl">
                    Qué ofrece SAIGTH
                </h3>
                <div className="flex flex-col gap-8 w-full py-28">
                    <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                        <article className="w-full md:w-3/5 bg-gradient-1 rounded-3xl p-12">
                            <h4 className="md:text-4xl text-2xl">
                                Detección de objetos en tiempo real
                            </h4>
                        </article>
                        <article className="w-full md:w-2/5 bg-gradient-2 rounded-3xl flex justify-end flex-col p-12">
                            <h4 className="md:text-4xl text-2xl py-2">
                                Control mediante comandos de voz
                            </h4>
                            <p className="text-gray-400 text-xl">Asistente personal con ChatGPT integrado</p>
                        </article>
                    </div>
                    <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                        <article className="w-full md:w-2/5 bg-gradient-3 rounded-3xl p-12 flex flex-col justify-end">
                            <h4 className="md:text-4xl text-2xl">
                                Síntesis de voz con Text to Speech
                            </h4>
                        </article>
                        <article className="w-full md:w-3/5 bg-gradient-4 rounded-3xl p-12">
                            <h4 className="md:text-4xl text-2xl">
                                Transcripción de voz a texto en tiempo real
                            </h4>
                        </article>
                    </div>
                    <article className="w-full bg-black grid-item-heigth rounded-3xl gap-6 p-12 flex relative">
                        <div className="grow">
                            <h4 className="md:text-4xl text-2xl">
                                Detección de objetos avanzada
                            </h4>
                            <p></p>                            
                        </div>
                        <Detection height={150} width={200} x="left-0" y="-bottom-4" color="purple-500" src="/space-robot-cat.png" id="1" name="Cat"/>
                        <Img
                        className="roundex-3xl"
                        width={600}
                        height={400}
                        alt="Rekognition Example Image"
                        src={"/rekognition2.jpg"}
                        />
                    </article>             
                </div>

            </section> 
            <section className="w-full md:px-24 px-11 py-16 bg-strong-primary relative">
                <h3 className="md:text-6xl text-3xl z-10 relative">Más características</h3>
                <h4 className="py-2 text-gray-400 z-10 relative">De la detección de objetos avanzada</h4>
                <div className="flex my-10 flex-wrap gap-6 md:flex-nowrap">
                    <div className="backdrop-blur-sm rounded-3xl md:w-1/3 w-full border-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                        <h4>Búsqueda de rostros</h4>
                        <p>
                            Buscar coincidencias con rostros almacenados.
                        </p>
                    </div>           
                    <div className="backdrop-blur-sm rounded-3xl md:w-1/3 w-full border-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                        <h4>Análisis facial</h4>
                        <p>
                            Análisis de emociones, edad, género, etc. 
                        </p>
                    </div>    
                    <div className="backdrop-blur-sm rounded-3xl md:w-1/3 w-full bg-card-pr-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                        <h4>Texto en imágenes</h4>
                        <p>
                            Capaz de extraer texto de imágenes reales como carteles, camisetas, etc.
                        </p>
                    </div>             
                </div>
                <Image src={"/productivity-bg-2.webp"} alt="Decoration" height={225} width={471} className="absolute top-0 left-0 z-0"/>
                <Image src={"/productivity-bg-1.webp"} alt="Decoration" height={225} width={471} className="absolute bottom-0 z-0"/>
            </section>            
            <section className="md:px-24 px-11 flex flex-col py-44">
                <Chip variant="bordered"><h2 className="text-xl p-2">Desarrollo</h2></Chip>
                <h3 className="md:text-6xl py-3 text-3xl">
                    Cómo se creó SAIGTH
                </h3>
                <article>
                    <div>
                        <h3>Detección de objetos</h3>
                        <p>(texto explicativo de la detección de objetos)</p>
                    </div>
                    <div>
                        (imagen de la detección de objetos)
                    </div>
                </article>
                <article>
                    <div>
                        <h3>Control por voz</h3>
                        <p>(texto explicativo del control por voz)</p>
                    </div>
                    <div>
                        (imagen del control por voz)
                    </div>
                </article>
            </section>    
            <section className="md:px-24 px-11 flex flex-col bg-third-section h-screen">
                <Chip variant="bordered"><h2>FAQs</h2></Chip>
                aqui pongo preguntas frecuentes porque no se que mas poner la verdad
            </section>    
        </div>
    )
}