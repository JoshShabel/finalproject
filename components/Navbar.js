'use client'
import Link from 'next/link'
import './Navbar.module.css'
import { useContext } from 'react';
import ModeContext from "../components/ModeContext.js";
const Navbar = () => {
    const { isOn, toggleOn } = useContext(ModeContext);

    return (
        <nav className={isOn ? "navbarDark" : "navbarLight"}>
            <div>
                {/*                <Link href="/profile-app-fixed/Home">
                    <button className={isOn ? "leftButtonDark" : "leftButtonLight"}>Home</button>
                </Link>
                <Link href="/profile-app-fixed/About">
                    <button className={isOn ? "leftButtonDark" : "leftButtonLight"}>About</button>
                </Link>
                <Link href="/profile-app-fixed/fetched-profiles">
                    <button className={isOn ? "leftButtonDark" : "leftButtonLight"}>Profiles</button>
                </Link>
                <Link href="/profile-app-fixed/AddProfiles">
                    <button className={isOn ? "leftButtonDark" : "leftButtonLight"}>Add Profiles</button>
                </Link>*/}
            </div>
            <div>
                <h3 style={{margin: 0}} className={"rightButtonTwo"}>Toggle mode:</h3>
                <button className={isOn ? "rightButtonOneDark" : "rightButtonOneLight"} onClick={toggleOn}>
                    {isOn ? "Dark" : "Light"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;