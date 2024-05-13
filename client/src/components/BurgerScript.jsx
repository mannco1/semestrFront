import React, { useEffect } from 'react';

const BurgerScript = () => {
    useEffect(() => {
        const burgerClickHandler = () => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav');
            burger.classList.toggle('active');
            nav.classList.toggle('open');
        };
        
        document.querySelector('.burger').addEventListener('click', burgerClickHandler);
        
        // Очистка обработчика событий при размонтировании компонента
        return () => {
            document.querySelector('.burger').removeEventListener('click', burgerClickHandler);
        };
    }, []);

    return null;
};

export default BurgerScript;
