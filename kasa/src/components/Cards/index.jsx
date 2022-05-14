import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
 * @param {object} props charge les cards
 * @param {string} props.link > get link
 * @param {string} props.title > rental ad title
 * @param {string} props.cover > cover picture url
 * @returns Card comportant des logements miniatures
 */

function Card({ link, cover, title }) {
  return (
    <div className="Card">
      <Link to={link} className="link">
        <img src={cover} className="image_Card" alt="Logement" />
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
