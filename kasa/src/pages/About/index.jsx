// eslint-disable-next-line
import React from 'react';
import banner2 from '../../assets/banner2.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from '../../components/AboutDropdowns';
import AccordeonData from '../../data/aboutData';

const Apropos = () => {
  return (
    <div className="Apropos">
      <Header />
      <section className="Section">
        <div className="Banner">
          <img src={banner2} alt="banner2" />
        </div>
      </section>
      <ul className="accordion">
        {AccordeonData.map(({ title, content }) => (
          <Accordion key={content} title={title} content={content} />
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Apropos;
