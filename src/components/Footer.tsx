import {Link} from "@nextui-org/react";

export default function Footer(){
    return(
        <footer className="flex justify-between">
            <h5>Por Guillermo Bernal</h5>
            {/* poner con gradiente */}
            <Link href={"https://www.gbernal.dev/"} target="_blank">Mi Portfolio</Link>
            <ul className="flex">
                <li>Linkedin</li>
                <li>Github</li>
            </ul>
        </footer>
    )
}