import {Chip} from "@nextui-org/react";

export default function BentoGrid(){
    return(
        <div className="py-44 w-full max-w-screen-2xl px-24">
            <section className="">
                <Chip variant="bordered"><h2>Características</h2></Chip>
                <h3 className="text-2xl">
                    Qué ofrece SAIGTH
                </h3>
                <div className="flex flex-col gap-8 w-full py-28">
                    <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                        <article className="w-full md:w-2/3 bg-gradient-1 rounded-3xl p-6">
                            que esta pasando
                        </article>
                        <article className="w-full md:w-1/3 bg-gradient-2 rounded-3xl p-6 flex justify-end items-end">
                            articulo 2
                        </article>
                    </div>
                    <div className="flex flex-wrap gap-8 grid-item-heigth md:flex-nowrap">
                        <article className="w-full md:w-1/3 bg-gradient-3 rounded-3xl p-6">articulo3</article>
                        <article className="w-full md:w-2/3 bg-gradient-4 rounded-3xl p-6">articulo4</article>
                    </div>
                    <article className="w-full bg-gradient-5 grid-item-heigth rounded-3xl p-6">
                        articulo 5
                    </article>             
                </div>
                <article>
                    aqui otra cosa
                </article>
            </section>    
            <section>
                <Chip variant="bordered"><h2>Desarrollo</h2></Chip>
                aqui cuento como se hizo/como funciona
            </section>    
            <section>
                <Chip variant="bordered"><h2>FAQs</h2></Chip>
                aqui pongo preguntas frecuentes no se que mas poner la verdad
            </section>    
        </div>

    )
}