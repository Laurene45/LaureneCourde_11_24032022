import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

/*
 * @param {object} props charge le carrousel
 * utilisation de setState() / useState()
 * @returns Carrousel
 */

const Carrousel = ({ pictures }) => {
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

  return (
    <section className="carrousel">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={`carrousel__chevronLeft chevron ${className}`}
        //gestion des évènements
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
