import PropTypes from 'prop-types';

/*
 * @param {object} props charge la bannière
 * @param {string} props.image > background picture
 * @param {string} props.alt > picture alt text
 * @param {string} props.title > banner title (can be different or empty)
 * @returns banner
 */

const Banner = ({ image, title, alt }) => {
  return (
    <section className="banner">
      <h1 className="banner-title">{title}</h1>
      <img className="banner__image" src={image} alt={alt}></img>
    </section>
  );
};

Banner.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default Banner;
