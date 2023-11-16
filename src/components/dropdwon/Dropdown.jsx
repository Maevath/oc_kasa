import React, { useEffect, useState, useRef } from 'react';
import Arrow from '../svg/Arrow';



const Dropdown = ({ title, text, description, equipments }) => {
    const [showText, setShowText] = useState(false);

    const toggleShowText = () => {
        setShowText(!showText);
    };

    return (
        <div className='dropdowns'>
            <div className='dropdown '>
                <div className='dropdown-header' onClick={toggleShowText}>
                    <h3>{title}</h3>
                    <Arrow className={`arrow ${showText ? 'flipped' : ''}`} />
                </div>

                <div
                    className={`dropdown-text ${showText ? 'slideIn' : 'slideOut'}`}
                >
                    {text && <p>{text}</p>}
                    {description && <p>{description}</p>}
                    {equipments && equipments.length > 0 && (
                        <ul className='equipments'>
                            {equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;