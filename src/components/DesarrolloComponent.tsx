import Image from 'next/image';

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function DesarrolloComponent({ titulo, descripcion, img, direction, id, isInView }: { titulo: string, descripcion: string, img: string, direction: boolean, id: string, isInView: boolean }) {
    return (
        <article id={id} className={`flex justify-between items-center py-20 md:flex-nowrap flex-wrap ${direction ? 'flex-row-reverse' : ''}`}
        style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
        >
            <div className='md:w-1/2 md:py-5 py-10'>
                <h3 className="text-5xl">{titulo}</h3>
                <p className='text-gray-300 md:py-5 py-10'>{descripcion}</p>
            </div>
            <div className='border border-l-0 border-r-0 border-white p-2 rounded-2xl'>
                <Image className='rounded-2xl brightness-125' src={img} alt="yolo" width={550} height={550}/> 
            </div>
        </article>
    )
}