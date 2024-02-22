export default function BentoGrid(){
    return(
        <section className="py-44 w-full max-w-screen-2xl px-24">
            <h2>Bento Header</h2>
            <div className="flex flex-col gap-8  w-full py-28">
                <div className="flex gap-8 grid-item-heigth">
                    <article className="w-2/3 bg-gradient-1 rounded-3xl p-6">
                        que esta pasando
                    </article>
                    <article className="w-1/3 bg-gradient-2 rounded-3xl p-6 flex justify-end items-end">
                        articulo 2
                    </article>
                </div>
                <div className="flex gap-8   grid-item-heigth">
                    <article className="rounded-3xl p-6 w-1/3 bg-gradient-3">articulo3</article>
                    <article className="rounded-3xl p-6 w-2/3 bg-gradient-4">articulo4</article>
                </div>
                <article className="bg-gradient-5 grid-item-heigth rounded-3xl p-6">
                    articulo 5
                </article>                
            </div>

        </section>
    )
}