import React, { useEffect, useState, useRef } from 'react';
import Arrow from '../svg/Arrow';

const Dropdown = ({ title, content }) => {
    const [showText, setShowText] = useState(false);
    const dropdownTextRef = useRef(null);

    useEffect(() => {
        dropdownTextRef.current.style.display = 'none';
    }, []);

    const handleAnimationEnd = () => {
        if (!showText) {
            dropdownTextRef.current.style.display = 'none';
        }
    };

    const toggleShowText = () => {
        if (!showText) {
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

                <div ref={dropdownTextRef} className={`dropdown-text ${showText ? 'slideIn' : 'slideOut'}`} onAnimationEnd={handleAnimationEnd}>
                    {content && !Array.isArray(content) ? (
                        <p>{content}</p>
                    ) : (
                        Array.isArray(content) && (
                            <ul className='equipments'>
                                {content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;



