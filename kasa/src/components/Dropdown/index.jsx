import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ name, id, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Open/close dropdown
  const showContent = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <article className={name}>
      <button className="accordion-title dropdowns-title" onClick={showContent}>
        <span>{name}</span>
        <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </button>

      {isOpen && Array.isArray(content)&& (
        <ul className="accordion-content dropdowns-content">
          {content.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      )}

      {isOpen && typeof content === 'string' && (
        <p key={id} className="accordion-content dropdowns-content">
          {content}
        </p>
      )}
    </article>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default Dropdown;
