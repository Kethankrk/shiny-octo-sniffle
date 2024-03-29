import { Link } from "react-router-dom";

const Navbar = ()=>{

    return(
        <nav className="h-16 w-full flex justify-between items-center px-16 bg-black text-white">
            <p>Logo Here</p>
            <ul className="flex gap-10">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li><Link to="/download">Downloads</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar