// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// Composant fonctionnel : simple fonction JavaScript qui renvoie du JSX.
// Utilisation de props pour les cards via Home

// Props : Dans un composant fonctionnel, les propriétés sont passées comme argument de la fonction.
// entrées d’un composant React. Elles sont passées d’un composant parent à un composant enfant.
// props en lecture seule

/*
 * @param {*} props création composant Gallery
 * @returns Card comportant des logements en miniatures
 */

function Card({ link, cover, title }) {
  return (
    <div className="Card">
      <Link to={link}>
        <img src={cover} alt="Logement" />
        <div className="CardTitle">
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  link: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
