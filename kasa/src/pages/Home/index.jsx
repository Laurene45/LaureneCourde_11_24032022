// eslint-disable-next-line
import React from 'react';
import Header from '../../components/Header';
import banner1 from '../../assets/banner1.png';
import { housing } from '../../data/logements';
import Card from '../../components/Cards';
import Footer from '../../components/Footer';

// es6: fonction fléchée

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <section className="Section">
        <h3>Chez vous, partout et ailleurs</h3>
        <div className="Banner">
          <img src={banner1} alt="banner1" />
        </div>
      </section>

      <div className="Cards">
        {housing.map((housing) => (
          // Map() permet de prendre une liste de données et de la transformer en liste de composants
          // Pour chaque entrée du tableau on retourne un élément
          <Card
            // Prop key unique et stable
            // Props : identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés.
            // Utiliser l'id associée à la donnée title dans le JSON
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
