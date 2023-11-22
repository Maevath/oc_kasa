import React from 'react';
import Layout from '../../layout/Layout';
import Banner from '../../components/banner/Banner';
import bannerImg from '../../assets/img/banner-home.jpg';
import Thumbs from '../../components/thumbs/Thumbs'
import { useParams } from "react-router-dom"
import Lodging from '../lodging/Lodging';



const Home = () => {

    const { Id } = useParams();

    return (
        <div >
            <Layout>
                <div className='home'>
                    <Banner titre="Chez vous, partout&nbsp;et&nbsp;ailleurs&nbsp;" bannerImg={bannerImg} />
                    <Thumbs path={`:${Id}`} element={<Lodging />} />
                </div>
            </Layout>
        </div>
    );
};
export default Home;



