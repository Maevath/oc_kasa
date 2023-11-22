import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <main className='main-content'>{children}</main>
            <Footer copyright="© 2020 Kasa. All rights reserved" />
        </div>
    );
};

export default Layout;