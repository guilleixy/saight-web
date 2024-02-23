import Image from 'next/image'

export default function Detection({x, y, color, src, id, name, height, width}: {x: string, y: string, color: string, src: string, id: string, name: string, height: number, width: number}){
    const randomNumber = (Math.random() * 0.49 + 0.5).toFixed(2);
    return(
        <div className={`absolute ${x} ${y} text-black`}>
            <div className='margin-0 h-full flex'>
                <p className={`bg-${color} margin-0 pr-2`}>{id}</p>
                <p className={`bg-${color} margin-0 pr-2`}> {name}</p>
                <p className={`bg-${color} margin-0`}>{randomNumber}</p>
            </div>
            <Image height={height} width={width} src={src} alt={name} className={`border-${color} border-solid border-3 p-2`} draggable="false"/>
        </div>
    )
}