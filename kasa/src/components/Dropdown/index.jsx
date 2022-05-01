// eslint-disable-next-line
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

// différence entre props et state :
// props est passé au composant (à la manière des arguments d'une fonction)
// tandis que state est géré dans le composant (comme le sont les variables déclarées à l'intérieur d'une fonction)

// destructuration ligne 10 à la place de props

const Dropdown = ({ name, type, content }) => {
  // Hook : fonction qui permet d'utiliser/brancher un état local et fonctionnalités sans avoir à utiliser de classe
  // useState : permet d’ajouter l’état local React à des fonctions composants
  // c'est un moyen de « préserver » des valeurs entre différents appels de fonctions
  // UseState renvoie une paire de valeur :  l’état actuel et une fonction pour le modifier.

  // ici useState déclare une nouvelle variable d'état : isOpen
  // l'argument à passer est l'état initial.

  // pas toggle mais setIsOpen
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    dropdownView();
  };

  const dropdownView = () => {
    if (isOpen) {
      document.getElementById(name).classList.add('closed');
      document.getElementById(name).classList.remove('open');
      document
        .getElementById('chevron_' + name)
        .classList.remove('dropdown__open');
    } else {
      document.getElementById(name).classList.add('open');
      document.getElementById(name).classList.remove('closed');
      document
        .getElementById('chevron_' + name)
        .classList.add('dropdown__open');
    }
  };

  return (
    <div className="dropdown_wrap">
      <div className={`dropdown ${type}`} onClick={toggleDropdown}>
        <p className="dropdown__name">{name}</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="dropdown__icon"
          id={'chevron_' + name}
        />
      </div>
      <div id={name} className={`dropdown__list ${type} closed`}>
        {content.map((element) => (
          <li className="dropdown__elementName" key={element}>
            {element}
          </li>
        ))}
      </div>
    </div>
  );
};

// PropTypes exporte un ensemble de validateurs qui peuvent être utilisés pour s’assurer
//que la donnée que vous recevez est valide. Dans cet exemple, nous utilisons PropTypes.string.
//Quand une valeur non valide est fournie à une prop, un message d’avertissement apparaîtra dans la console JavaScript.
//Pour des raisons de performances, propTypes n’est vérifiée qu’en mode développement.

Dropdown.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;
