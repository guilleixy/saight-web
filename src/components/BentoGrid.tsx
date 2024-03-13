import {Chip} from "@nextui-org/react";
import { Image as Img } from "@nextui-org/react";
import Image from "next/image";
import Detection from "./Detection";
import CardWrapper from "./Bento/CardWrapper";
import BentoWrapper from "./Bento/BentoWrapper";
import DesarrolloComponent from "./DesarrolloComponent";

export default function BentoGrid(){
    return(
        <div className="py-44">
             {/* w-full max-w-screen-2xl */}
            <BentoWrapper />
            <CardWrapper />        
            <section id="desarrollo" className="md:px-24 px-11 flex flex-col py-44">
                <Chip variant="bordered"><h2 className="text-xl p-2">Desarrollo</h2></Chip>
                <h3 className="md:text-6xl py-3 text-3xl">
                    Cómo se creó SAIGHT
                </h3>
                <DesarrolloComponent 
                    titulo="Detección de objetos"
                    descripcion="Usando el modelo YOLOv8."
                    img="/yoloexample2.png"
                    direction={true}
                    id="detection"
                />
                <DesarrolloComponent 
                    titulo="Síntesis de voz"
                    descripcion="Usando la librería pyttsx3."
                    img="/yoloexample2.png"
                    direction={false}
                    id="tts"
                />
                <DesarrolloComponent 
                    titulo="Detección de voz"
                    descripcion="Usando Speech Recognition de Google."
                    img="/voicestt.jpg"
                    direction={true}
                    id="stt"
                />
            </section>       
        </div>
    )
}