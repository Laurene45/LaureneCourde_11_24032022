import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

/*
 * param {*} props création composant Rating 
 * @returns retourne la note en forme d'étoiles
 */


const Rating = (props) => {
    //parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
    const rate = parseInt(props.rate);
    const difference = 5 - rate;
    
    return (
        <React.StrictMode>
            {Array.from(Array(rate), (e,i) =>{
                return <FontAwesomeIcon icon={faStar} className='star filled' key={i}/>;
            })}
            {Array.from(Array(difference), (e,i) =>{
                return <FontAwesomeIcon icon={faStar} className='star empty' key={i} />;
            })}
        </React.StrictMode>
    )
}

export default Rating