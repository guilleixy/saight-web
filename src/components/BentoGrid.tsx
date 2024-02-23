import {Chip} from "@nextui-org/react";
import { Image as Img } from "@nextui-org/react";
import Image from "next/image";
import Detection from "./Detection";
import CardWrapper from "./Bento/CardWrapper";
import BentoWrapper from "./Bento/BentoWrapper";

export default function BentoGrid(){
    return(
        <div className="py-44">
             {/* w-full max-w-screen-2xl */}
            <BentoWrapper />
            <CardWrapper />        
            <section id="desarrollo" className="md:px-24 px-11 flex flex-col py-44">
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