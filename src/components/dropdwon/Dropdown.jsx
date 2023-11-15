import React, { useEffect, useState, useRef } from 'react';
import Arrow from '../svg/Arrow';


const Dropdown = ({ title, text, description, equipments }) => {
    const [showText, setShowText] = useState(false);
    const dropdownTextRef = useRef(null);


    useEffect(() => {
        // Assurez-vous que le texte est caché initialement
        dropdownTextRef.current.style.display = 'none';
    }, []);

    const handleAnimationEnd = () => {
        if (!showText) {
            // Si l'animation est terminée et le texte est caché, définissez display: none
            dropdownTextRef.current.style.display = 'none';
        }
    };

    const toggleShowText = () => {
        if (!showText) {

            // Si le texte est sur le point de s'afficher, réinitialisez d'abord display à block
            dropdownTextRef.current.style.display = 'flex';
        }

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
                    ref={dropdownTextRef}
                    className={`dropdown-text ${showText ? 'slideIn' : 'slideOut'}`}
                    onAnimationEnd={handleAnimationEnd}
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