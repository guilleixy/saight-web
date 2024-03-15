import {Link} from "@nextui-org/react";
import Detection from "./Detection";
import { Linkedin, GitHub } from "react-feather";

export default function Footer(){
    
    return(
        <footer className="flex justify-between relative md:px-24 px-11 py-10 bg-black overflow-x-hidden">
            {/* <Detection color="purple-500" text="Guillermo Bernal" id="1" name="Autor" classes=""/> */}
            {/* poner con gradiente */}
            <Link className="text-blue-200" href={"https://www.gbernal.dev/"} target="_blank">Mi Portfolio</Link>
            
            <div>Por Guillermo Bernal</div>
            
            <div>
                2024, Premio Don Bosco Edición Nº37
            </div>

            <ul className="flex gap-6">
                <li><Link className="text-blue-200" href={"www.linkedin.com/in/guillermo-bernal-b0515b285"} target="_blank"><Linkedin className="inline-block"/>  </Link></li>
                <li><Link className="text-blue-200" href={"https://www.gbernal.dev/"} target="_blank"><GitHub className="inline-block"/>  </Link></li>
            </ul>
        </footer>
    )
}