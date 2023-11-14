import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from '../error/Error'
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import Dropdown from '../../components/dropdwon/Dropdown';
import Star from '../../components/svg/Star'

const Lodging = () => {
    const { id } = useParams();
    const [lodgingData, setLodgingData] = useState(null);
    const [dataLodging, setDataLodging] = useState([]);

    useEffect(() => {
        // Faites une requête pour charger le fichier JSON du logement à partir de son URL dans le répertoire "public"
        axios
            .get('/dataLodging.json')
            .then((response) => {
                // Une fois les données du logement chargées, recherchez l'élément avec l'ID correspondant
                const data = response.data;
                const lodging = data.find(item => item.id === id);
                setLodgingData(lodging);
            })
            .catch((error) => console.error("Erreur lors de la requête du logement :", error));

        // Faites une requête pour charger le fichier JSON de dataLodging
        axios
            .get('/dataLodging.json')
            .then((response) => {
                const data = response.data;
                setDataLodging(data);
            })
            .catch((error) => console.error("Erreur lors de la requête de dataLodging :", error));
    }, [id]);
    if (!lodgingData) {
        return (
            <Error />
        )
    }
    return (
        <div>
            <Header />
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
                    {dataLodging
                        .filter(item => item.id === id)
                        .map((item, index) => (
                            <Dropdown
                                key={index}
                                title="Description"
                                description={item.description}
                            />
                        ))
                    }

                    {dataLodging
                        .filter(item => item.id === id)
                        .map((item, index) => (
                            <Dropdown
                                key={index}
                                title="Équipements"
                                equipments={item.equipments}

                            />
                        ))
                    }
                </div>
            </div>
            <Footer copyright="© 2020 Kasa. All&nbsp;rights&nbsp;reserved" />
        </div>
    );
};

export default Lodging;