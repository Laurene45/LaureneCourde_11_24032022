import Header from '../../components/Header';
import Banner from '../../components/Banner';
import banner1 from '../../assets/banner1.png';
import { housing } from '../../data/logements';
import Card from '../../components/Cards';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Banner image={banner1} alt="Paysage" title="Chez vous, partout et ailleurs" />

      <div className="Cards">
        {housing.map((housing) => (
          // Map() permet de prendre une liste de données et de la transformer en liste de composants
          // Pour chaque entrée du tableau on retourne un élément
          <Card
            key={housing.id}
            link={`/housing/${housing.id}`}
            title={housing.title}
            cover={housing.cover}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
