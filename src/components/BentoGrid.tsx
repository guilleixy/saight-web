import {Chip} from "@nextui-org/react";
import { Image as Img } from "@nextui-org/react";
import Image from "next/image";
import Detection from "./Detection";
import CardWrapper from "./Bento/CardWrapper";
import BentoWrapper from "./Bento/BentoWrapper";
import DesarrolloComponent from "./DesarrolloComponent";

export default function BentoGrid(){
    return(
        <div className="pt-40">
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
                    descripcion="Usando el modelo YOLOv8, logramos obtener una gran cantidad de detecciones
                    fiables en tiempo real. Este modelo nos permite flexibilidad al contar con varias opciones
                    de mayor o menor peso y la posibilidad de entrenar con datos propios."
                    img="/yoloexample2.png"
                    direction={true}
                    id="detection"
                />
                <DesarrolloComponent 
                    titulo="Síntesis de voz"
                    descripcion="Usando la librería pyttsx3 conseguimos una síntesis de voz ajustable en cuanto a velocidad
                    de idiomas y ligera. Esto es vital para que pueda ser soportada por dispositivos móviles con poca capacidad de computación."
                    img="/listeningphone.avif"
                    direction={false}
                    id="tts"
                />
                <DesarrolloComponent 
                    titulo="Detección de voz"
                    descripcion="Usar Speech Recognition de Google nos brinda un análisi de voz extremadamente preciso. Al usar
                    una API la carga de trabajo se reduce y se puede utilizar en cualquier dispositivo con conexión a internet."
                    img="/talkingphone.avif"
                    direction={true}
                    id="stt"
                />
                <DesarrolloComponent 
                    titulo="Asistente con ChatGPT"
                    descripcion="Implementando la API de ChatGPT conseguimos combinar la IA generativa más popular con nuestra aplicación.
                    Esto nos permite tener conversaciones naturales con la aplicación. Además, la fusión de estas tecnologías nos permite avanzar un paso
                    más en la implementación de estas tecnologías, permitiendo que ChatGPT nos dé mejores respuestas al ser consciente de nuestro entorno."
                    img="/chatgpt.jpg"
                    direction={false}
                    id="gpt"
                />
                <DesarrolloComponent 
                    titulo="AWS Rekognition"
                    descripcion="Amazon Web Services ofrece tecnologías de analisis de imágenes avanzado. Con AWS Rekognition somos capaces
                    de analizar una imágen de diferentes formas para obtener toda la información posible. Entre todas estas posibilidades, somos capaces de detectar y analizar
                    texto en fotos, analizar rostros para determinar rasgos faciales y emociones y analizar caras para determinar si son algún personaje famoso."
                    img="/aws.jpg"
                    direction={true}
                    id="aws"
                />             
            </section>       
        </div>
    )
}