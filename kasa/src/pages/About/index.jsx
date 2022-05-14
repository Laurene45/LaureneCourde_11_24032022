import Header from '../../components/Header';
import Banner from '../../components/Banner';
import banner2 from '../../assets/banner2.png';
import Footer from '../../components/Footer';
import { about } from '../../data/aboutData';
import Dropdown from '../../components/Dropdown/index';


const Apropos = () => {
  return (
    <div className="Apropos">
      <Header />
      <Banner image={banner2} type="about" />
      <section className="accordion">
        {about.map(({ name, content }) => (
          <Dropdown key={content} name={name} content={[content]} />
        ))}
      </section>
      <Footer />
    </div>
  );
};



export default Apropos;
