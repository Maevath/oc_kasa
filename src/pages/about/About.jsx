import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Banner from '../../components/banner/Banner';
import bannerImg from '../../assets/img/banner-about.jpg';
import Dropdown from '../../components/dropdwon/Dropdown';
import axios from 'axios';
import { useEffect, useState } from 'react';

const About = () => {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        // Faites une requête pour charger les données à partir du fichier JSON
        axios.get('/dataAbout.json')
            .then((response) => {
                const data = response.data;
                setAboutData(data);
            })
            .catch((error) => console.error("Erreur lors de la requête :", error));
    }, []);

    return (
        <div>
            <Header />
            <div className='about'>
                <Banner bannerImg={bannerImg} />

                {aboutData.map((item, index) => (
                    <Dropdown
                        key={index}
                        title={item.title}
                        text={item.text}
                        className="dropdown"
                    />
                ))}
            </div>
            <Footer copyright="© 2020 Kasa. All&nbsp;rights&nbsp;reserved" />
        </div>
    );
};

export default About;