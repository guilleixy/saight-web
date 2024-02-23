import Image from 'next/image'

export default function Detection({color, src, text, id, name, height, width, classes, textClasses}: {color: string, src?: string, text?: string, id: string, name: string, height?: number, width?: number, classes?: string, textClasses?: string}){
    const randomNumber = (Math.random() * 0.49 + 0.5).toFixed(2);
    return(
        <div className={`${classes} text-black`}>
            <div className='margin-0 flex'>
                <p className={`bg-${color} margin-0 pr-2`}>{id}</p>
                <p className={`bg-${color} margin-0 pr-2`}> {name}</p>
                <p className={`bg-${color} margin-0`}>{randomNumber}</p>
            </div>
            {src ? (
                <Image height={height} width={width} src={src} alt={name} className={`border-${color} border-solid border-3 p-2`} draggable="false"/>
            ) : (
                <div className={`border-${color} border-solid border-3 p-2 text-white`}>{text}</div>
            )}
        </div>
    )
}