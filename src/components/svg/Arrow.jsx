import React from 'react';

const Arrow = ({ className, onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="45" viewBox="0 0 96 120" fill="none" className={className} onClick={onClick}>
            <path
                d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
                fill="white"
            />
            <path
                d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
                fill="white"
                filter="url(#arrowShadow)"
            />
        </svg>
    );
};

export default Arrow;