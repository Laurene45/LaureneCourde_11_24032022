// eslint-disable-next-line
import React from 'react';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';



const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <span className="icone">
          {isActive ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
        </span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Accordion;
