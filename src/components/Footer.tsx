import {Link} from "@nextui-org/react";
import Detection from "./Detection";

export default function Footer(){
    return(
        <footer className="flex justify-between relative">
            <Detection color="purple-500" text="Guillermo Bernal" id="1" name="Autor" classes=""/>
            {/* poner con gradiente */}
            <Link href={"https://www.gbernal.dev/"} target="_blank">Mi Portfolio</Link>
            <ul className="flex">
                <li>Linkedin</li>
                <li>Github</li>
            </ul>
        </footer>
    )
}