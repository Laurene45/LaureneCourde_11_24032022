// eslint-disable-next-line
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

/*
 * @param {*} props charge le composant Carrousel
 * @returns Carrousel
 */

const Carrousel = ({ pictures }) => {
  // setState() planifie des modifications à l’état local du composant, et indique à React que ce composant et ses enfants ont besoin d’être rafraîchis une fois l’état mis à jour.
  //C’est en général ainsi qu’on met à jour l’interface utilisateur en réaction à des événements ou réponses réseau.

  const [activeIndex, setActiveIndex] = useState(0);
  const className = pictures.length > 1 ? '' : 'none';
  const previous = () => {
    setActiveIndex((index) =>
      index - 1 < 0 ? pictures.length - 1 : index - 1
    );
  };
  const next = () => {
    setActiveIndex((index) =>
      index + 1 > pictures.length - 1 ? 0 : index + 1
    );
  };

  //onClick : gestion des évènements
  return (
    <section className="carrousel">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={`carrousel__chevronLeft chevron ${className}`}
        onClick={previous}
      />
      <img
        src={pictures[activeIndex]}
        className="carrousel__image"
        alt="cover"
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className={`carrousel__chevronRight chevron ${className}`}
        onClick={next}
      />
      <p className="carrousel__index">
        {activeIndex + 1}/{pictures.length}
      </p>
    </section>
  );
};

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Carrousel;
