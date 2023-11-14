import React from 'react';
import Logo from '../../components/svg/LogoKasa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header">
            <Logo />
            <ul className="navbar">
                <li>
                    <NavLink to="/home" className={nav => (nav.isActive ? "nav-active" : "")}>
                        ACCUEIL
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={nav => (nav.isActive ? "nav-active" : "")}>
                        À&nbsp;PROPOS
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;