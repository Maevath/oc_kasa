import React, { useEffect, useState } from 'react';
import Logo from '../../components/svg/LogoKasa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1400);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="header">
            <Logo />
            <ul className="navbar">
                <li>
                    <NavLink to="/home" className={nav => (nav.isActive ? "nav-active" : "")}>
                        {isDesktop ? 'Accueil' : 'ACCUEIL'}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={nav => (nav.isActive ? "nav-active" : "")}>
                        {isDesktop ? 'À Propos' : 'À PROPOS'}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;