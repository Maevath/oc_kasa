import Layout from '../../layout/Layout';
import Banner from '../../components/banner/Banner';
import bannerImg from '../../assets/img/banner-about.jpg';
import Dropdown from '../../components/dropdwon/Dropdown';
import axios from 'axios';
import { useEffect, useState } from 'react';

const About = () => {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        axios.get('/dataAbout.json')
            .then((response) => {
                const data = response.data;
                setAboutData(data);
            })
            .catch((error) => console.error("Erreur lors de la requête :", error));
    }, []);


    const dropdownContents = aboutData.map(item => ({
        title: item.title,
        text: item.text,
    }));

    return (
        <div>
            <Layout>
                <div className='about'>
                    <Banner bannerImg={bannerImg} />

                    {dropdownContents.map((item, index) => (
                        <Dropdown
                            key={index}
                            title={item.title}
                            content={item.text}
                            className="dropdown"
                        />
                    ))}
                </div>
            </Layout>
        </div>
    );
};

export default About;



