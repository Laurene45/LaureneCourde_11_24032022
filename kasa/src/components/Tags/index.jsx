import PropTypes from 'prop-types';

/*
 * @param {object} props charge les tags
 * @param {array} props.name > get tag text
 * @returns retourne le nom du tag
 */

const Tag = ({ name }) => {
  return (
    <div className="tag">
      <p className="tag__name">{name}</p>
    </div>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
};

export default Tag;
