import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, setReady, scroll }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Typing logic goes here
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
            setReady(false)
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setReady(true)
                scroll()
            }, 1000)
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

export default Typewriter;