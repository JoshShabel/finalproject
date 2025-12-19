'use client'
import Link from 'next/link'
import './Navbar.module.css'
import { useContext } from 'react';
import ModeContext from "../components/ModeContext.js";
const Navbar = () => {
    const { isOn, toggleOn } = useContext(ModeContext);

    return (
        <div>

        </div>
    );
};

export default Navbar;