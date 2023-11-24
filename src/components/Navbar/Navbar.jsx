import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    const navItem = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/about",
            text: "About"
        }
    ]

    return (
        <div className='px-32 flex justify-between items-center py-4 fixed top-0 left-0 w-screen z-[9999]'>
            <Logo />

            <ul className="flex gap-4">
                {navItem.map(({ path, text }) => <li key={path} className="capitalize">
                    <NavLink className="font-medium text-xl hover:text-secondary-100" to={path}>{text}</NavLink>
                </li>)}
            </ul>
        </div>
    );
};

export default Navbar;