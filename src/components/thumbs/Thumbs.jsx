import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Thumbs = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get('/dataLodging.json')
            .then((response) => {
                setLocations(response.data);
            })
            .catch((error) => console.error("Erreur lors de la requête :", error));
    }, []);

    return (
        <div className='thumbs'>
            {locations.map((location) => (
                <Link className='thumb' to={`/lodging/${location.id}`} key={location.id}>
                    <div className="card">
                        <h2 className="titleLocation">{location.title}</h2>
                        <div className="image-container">
                            <img src={location.cover} alt={`${location.title}`} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Thumbs;