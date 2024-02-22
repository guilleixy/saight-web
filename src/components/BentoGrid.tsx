export default function BentoGrid(){
    return(
        <section className="w-2/3 py-44">
            <h2>Bento Header</h2>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 h-96">
                    <article className="w-2/3 bg-gradient-1 rounded-3xl p-6">
                        que esta pasando
                    </article>
                    <article className="w-1/3 bg-gradient-2 rounded-3xl p-6 flex justify-end items-end">
                        articulo 2
                    </article>
                </div>
                <div className="flex gap-4 h-96">
                    <article className="rounded-3xl p-6 w-1/3 bg-gradient-3">articulo3</article>
                    <article className="rounded-3xl p-6 w-2/3 bg-gradient-4">articulo4</article>
                </div>
                <article className="bg-gradient-5 h-96 rounded-3xl p-6">
                    articulo 5
                </article>                
            </div>

        </section>
    )
}