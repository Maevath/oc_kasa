import React from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Banner from '../../components/banner/Banner';
import bannerImg from '../../assets/img/banner-home.jpg';
import Thumbs from '../../components/thumbs/Thumbs'
import { useParams } from "react-router-dom"
import Lodging from '../lodging/Lodging';


const Home = () => {

    const { Id } = useParams();

    return (
        <div >
            <Header />
            <div className='home'>
                <Banner titre="Chez vous, partout&nbsp;et&nbsp;ailleurs&nbsp;" bannerImg={bannerImg} />
                <Thumbs path={`:${Id}`} element={<Lodging />} />
            </div>
            <Footer copyright="© 2020 Kasa. All&nbsp;rights&nbsp;reserved" />
        </div>
    );
};
export default Home;