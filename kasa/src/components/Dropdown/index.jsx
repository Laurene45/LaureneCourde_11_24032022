import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import PropTypes from 'prop-types';

// différence entre props et state : 
// props est passé au composant (à la manière des arguments d'une fonction)
// tandis que state est géré dans le composant (comme le sont les variables déclarées à l'intérieur d'une fonction)

const Dropdown = (props) => {
    // Hook : fonction qui permet d'utiliser/brancher un état local et fonctionnalités sans avoir à utiliser de classe
    // useState : permet d’ajouter l’état local React à des fonctions composants
    // c'est un moyen de « préserver » des valeurs entre différents appels de fonctions
    // UseState renvoie une paire de valeur :  l’état actuel et une fonction pour le modifier.

    // ici useState déclare une nouvelle variable d'état : isOpen
    // l'argument à passer est l'état initial.


    const [isOpen, toggle] = useState(false)
    
    const toggleDropdown = (e) => {
        e.preventDefault();
        toggle(!isOpen);
        dropdownView(props,isOpen)
    }

    const dropdownView = (props,isOpen) =>{
        if(isOpen){
            document.getElementById(props.name).classList.add('closed')
            document.getElementById(props.name).classList.remove('open')
            document.getElementById('chevron_'+props.name).classList.remove('dropdown__open')
        }else{
            document.getElementById(props.name).classList.add('open')
            document.getElementById(props.name).classList.remove('closed')
            document.getElementById('chevron_'+props.name).classList.add('dropdown__open')
        }
    }

    return (
        <div className='dropdown_wrap'>
            <div className={`dropdown ${props.type}`} onClick={(e)=>toggleDropdown(e)}>
                <p className="dropdown__name">{props.name}</p>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown__icon" id={'chevron_'+ props.name} />
            </div>
            <div id={props.name} className={`dropdown__list ${props.type} closed`}>
                {
                    Array.isArray(props.content) ? props.content.map((element) => {
                        return <li className="dropdown__elementName" key={element}>{element}</li>
                    }) : <p className="dropdown__content">{props.content}</p>
                }
            </div>
        </div>
    )
}


// PropTypes exporte un ensemble de validateurs qui peuvent être utilisés pour s’assurer 
//que la donnée que vous recevez est valide. Dans cet exemple, nous utilisons PropTypes.string. 
//Quand une valeur non valide est fournie à une prop, un message d’avertissement apparaîtra dans la console JavaScript.
//Pour des raisons de performances, propTypes n’est vérifiée qu’en mode développement.


Dropdown.propTypes={
    type:PropTypes.string,
    name:PropTypes.string,
    content:PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)]),
}

export default Dropdown