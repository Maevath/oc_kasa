import React from 'react';
import Logo from '../../components/svg/LogoKasa';

const Footer = ({ copyright }) => {
    return (
        <div className='footer'>
            <Logo className='logo'></Logo>
            <p>{copyright}</p>
        </div>
    );
};

export default Footer;




