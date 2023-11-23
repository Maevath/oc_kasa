import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from '../error/Error'
import Layout from '../../layout/Layout';
import Carousel from '../../components/carousel/Carousel';
import Dropdown from '../../components/dropdwon/Dropdown';
import Star from '../../components/svg/Star'


const Lodging = () => {
    const { id } = useParams();
    const [lodgingData, setLodgingData] = useState(null);
    const [dataLodging, setDataLodging] = useState([]);

    useEffect(() => {
        axios
            .get('/dataLodging.json')
            .then((response) => {
                const data = response.data;
                const lodging = data.find(item => item.id === id);
                setLodgingData(lodging);
            })
            .catch((error) => console.error("Erreur lors de la requête du logement :", error));

        axios
            .get('/dataLodging.json')
            .then((response) => {
                const data = response.data;
                setDataLodging(data);
            })
            .catch((error) => console.error("Erreur lors de la requête de dataLodging :", error));
    }, [id]);

    const lodgingInfo = dataLodging.find(item => item.id === id);

    if (!lodgingInfo) {
        return <Error />;
    }

    const dropdownContents = [
        { title: 'Description', content: lodgingInfo.description },
        { title: 'Équipements', content: lodgingInfo.equipments }
    ];

    return (
        <div>
            <Layout>
                <div className='page'>
                    <Carousel />
                    {lodgingData ? (
                        <div className='location'>
                            <div className='lodging'>
                                <h2 className='titleLocation'>{lodgingData.title}</h2>
                                <h3>{lodgingData.location}</h3>
                                <div className='tags'>
                                    {lodgingData.tags.map((tag, index) => (
                                        <span key={index} className='tag' title={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='hote-profil'>
                                <div className='rating'>
                                    <div className='rating'>
                                        {[...Array(5)].map((_, index) => (
                                            <Star
                                                key={index}
                                                color={index < lodgingData.rating ? '#FF6060' : '#CCCCCC'}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className='hote'>
                                    <p className='hote-name'>{lodgingData.host.name}</p>
                                    <img className='hote-img' src={lodgingData.host.picture} alt={lodgingData.host.name} />
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}

                    <div className='dropdown-lodging'>
                        {/* Utilisez les informations pour rendre les composants Dropdown */}
                        {dropdownContents.map((item, index) => (
                            <Dropdown
                                key={index}
                                title={item.title}
                                content={item.content}
                                className="dropdown"
                            />
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Lodging;