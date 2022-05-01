// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';

/*
 * props création composant Tag
 * @returns retourne le nom du tag
 */

//  A Faire : changer props par la destructuration

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
