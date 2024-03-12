import Image from 'next/image';

export default function DesarrolloComponent({ titulo, descripcion, img, direction, id }: { titulo: string, descripcion: string, img: string, direction: boolean, id: string }) {
    return (
        <article id={id} className={`flex justify-between items-center ${direction ? 'flex-row-reverse' : ''}`}>
            <div>
                <h3 className="text-5xl">{titulo}</h3>
                <p className='text-gray-300'>{descripcion}</p>
            </div>
            <div className='border border-l-0 border-r-0 border-white p-2 rounded-2xl'>
                <Image className='rounded-2xl brightness-125' src={img} alt="yolo" width={550} height={550}/> 
            </div>
        </article>
    )
}