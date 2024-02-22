import {Chip} from "@nextui-org/react";
import Image from "next/image";

export default function BentoGrid(){
    return(
        <div className="py-44 w-full max-w-screen-2xl">
            <section className="md:px-24 px-11">
                <Chip variant="bordered"><h2>Características</h2></Chip>
                <h3 className="text-2xl">
                    Qué ofrece SAIGTH
                </h3>
                <div className="flex flex-col gap-8 w-full py-28">
                    <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                        <article className="w-full md:w-3/5 bg-gradient-1 rounded-3xl p-6">
                            <h4 className="text-2xl">
                                Detección de objetos en tiempo real
                            </h4>
                        </article>
                        <article className="w-full md:w-2/5 bg-gradient-2 rounded-3xl p-6 flex justify-end flex-col">
                            <h4 className="text-2xl">
                                Control mediante comandos de voz
                            </h4>
                            <p className="text-gray-300">Asistente personal con ChatGPT integrado</p>
                        </article>
                    </div>
                    <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                        <article className="w-full md:w-2/5 bg-gradient-3 rounded-3xl p-6 flex flex-col justify-end">
                            articulo3
                        </article>
                        <article className="w-full md:w-3/5 bg-gradient-4 rounded-3xl p-6">articulo4</article>
                    </div>
                    <article className="w-full bg-gradient-5 grid-item-heigth rounded-3xl p-6">
                        articulo 5
                    </article>             
                </div>

            </section> 
            <section className="w-full md:px-24 px-11 py-16 bg-strong-primary relative">
                <h3>Algo de algo</h3>
                <div className="flex gap-6 my-10 h-72 flex-wrap">
                    <div className="backdrop-blur-sm rounded-3xl grow border-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                        <h4>Dato</h4>
                        <p>Cosa del dato</p>
                    </div>           
                    <div className="backdrop-blur-sm rounded-3xl grow bg-card-primary border-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                        <h4>Dato</h4>
                        <p>Cosa del dato</p>
                    </div>    
                    <div className="backdrop-blur-sm rounded-3xl grow bg-card-pr-solid border-gray-700 p-12 z-10 bg-black bg-opacity-50">
                        <h4>Dato</h4>
                        <p>Cosa del dato</p>
                    </div>             
                </div>
                <Image src={"/productivity-bg-1.webp"} alt="Decoration" height={225} width={471} className="absolute bottom-0"/>
            </section>            
            <section>
                <Chip variant="bordered"><h2>Desarrollo</h2></Chip>
                aqui cuento como se hizo/como funciona
            </section>    
            <section>
                <Chip variant="bordered"><h2>FAQs</h2></Chip>
                aqui pongo preguntas frecuentes porque no se que mas poner la verdad
            </section>    
        </div>

    )
}