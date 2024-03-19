
import Detection from "./Detection";
import CardWrapper from "./Bento/CardWrapper";
import BentoWrapper from "./Bento/BentoWrapper";
import DesarrolloWrapper from "./DesarrolloWrapper";


export default function BentoGrid(){
    return(
        <div className="pt-40">
             {/* w-full max-w-screen-2xl */}
            <BentoWrapper />
            <CardWrapper />  
            <DesarrolloWrapper />          
        </div>
    )
}