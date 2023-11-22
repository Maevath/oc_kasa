import React from 'react';

const Banner = ({ titre, bannerImg }) => {
    return (
        <div className='banner'>
            <h1>{titre}</h1>
            <div className='img-container'>
                <img src={bannerImg} alt="Paysage avec la mer et des falaises" />
            </div>

        </div>
    );
};

export default Banner;




