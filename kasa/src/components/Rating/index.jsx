// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = (star) => {
  const rate = parseInt(star.rate);
  const difference = 5 - rate;

  return (
    <>
      {Array.from(Array(rate), (e, i) => {
        return (
          <FontAwesomeIcon icon={faStar} className="star filled" key={i} />
        );
      })}
      {Array.from(Array(difference), (e, i) => {
        return <FontAwesomeIcon icon={faStar} className="star empty" key={i} />;
      })}
    </>
  );
};

Rating.propTypes = {
  star: PropTypes.oneOf(['1', '2', '3', '4', '5']),
};

export default Rating;
