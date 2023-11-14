import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Arrow from '../svg/Arrow';


const Carousel = () => {
    const { id } = useParams();
    const [lodgingData, setLodgingData] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Faites une requête pour charger le fichier JSON à partir de son URL dans le répertoire "public"
        axios.get('/dataLodging.json')
            .then((response) => {
                // Une fois les données chargées, recherchez l'élément avec l'ID correspondant
                const data = response.data;
                const lodging = data.find(item => item.id === id);
                setLodgingData(lodging);
            })
            .catch((error) => console.error("Erreur lors de la requête :", error));
    }, [id]);

    const handlePrevImage = () => {
        // Décrémentez l'index pour afficher l'image précédente
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : lodgingData.pictures.length - 1
        );
    };

    const handleNextImage = () => {
        if (lodgingData) {
            // Incrémentez l'index pour afficher l'image suivante
            setCurrentImageIndex((prevIndex) =>
                prevIndex < lodgingData.pictures.length - 1 ? prevIndex + 1 : 0
            );
        }
    };

    return (
        <div className="carousel">
            <div className='carousel-inner'>
                {lodgingData && (
                    <img src={lodgingData.pictures[currentImageIndex]} alt={`Vue de ${lodgingData.title} - ${currentImageIndex + 1}`} />
                )}

                <div className='arrow-container'>
                    <Arrow className='left' onClick={handlePrevImage} />
                    <Arrow className='right' onClick={handleNextImage} />
                </div>
            </div>
        </div>
    );
};

export default Carousel;