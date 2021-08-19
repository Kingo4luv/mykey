import { Link } from "react-router-dom";
import MobileNavItem from "./NavItem";

const MobileNav = ({links}: {links: {name: string, sublinks: {name: string; url:string; text?: string; img?:string; imgMobile?: string}[]}[]}) => {
    return(
        <ul className="w-full h-screen min-h-screen md:hidden bg-white fixed top-16 left-0 right-0 bottom-0 border z-50 px-4 py-4 overflow-y-auto scrolling-wrapper">
            {links.map((link, i) => {
                return(
                    <MobileNavItem link={link} key={i} />
                )
            })}
            <li>
                <Link to="/login" className="border border-blue w-full block py-3 rounded text-sm text-blue text-center font-medium mt-6">
                    Sign in
                </Link>
                <Link to="#" className="border border-blue bg-blue w-full block py-3 rounded text-sm text-white text-center font-medium mt-4">
                    Get Access
                </Link>
            </li>
        </ul>
    )
}

export default MobileNav;