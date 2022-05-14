import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { housing } from '../../data/logements';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Rating from '../../components/Rating';
import Tag from '../../components/Tags';
import Dropdown from '../../components/Dropdown/index';
import Carrousel from '../../components/Carrousel';

const Location = () => {
  const param = useParams();
  const [house, setHouse] = useState(null);
  
  // useNavigate() : hook qui permet de naviguer entre les pages
  const navigate = useNavigate();
  useEffect(() => {
    // Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL.
    const foundHouse = housing.find((house) => house.id === param.id);
    if (!foundHouse) {
      navigate('/error');
    } else {
      setHouse(foundHouse);
    }
  }, []);

  return (
    <div>
      <Header />
      {house != null && (
        <>
          <Carrousel pictures={house?.pictures} />
          <section className="infos">
            <div className="infos__title_localisation_tags">
              <div className="infos__title_localisation">
                <h2 className="infos__title">{house?.title}</h2>
                <h5 className="infos__localisation">{house?.location}</h5>
              </div>
              <div className="infos__tags">
                {house?.tags.map((tag) => (
                  <Tag name={tag} key={tag} />
                ))}
              </div>
            </div>
            <div className="infos__host_rate">
              <div className="infos__host">
                <p className="infos__hostName">{house?.host.name}</p>
                <img
                  className="infos__hostPicture"
                  src={house?.host.picture}
                  alt={house?.host.name}
                />
              </div>
              <div className="infos__rate" id="rating">
                <Rating rate={house?.rating} />
              </div>
            </div>
          </section>
          <section className="dropdowns">
            <Dropdown 
              type="equipements_description"
              name="Description"
              content={[house?.description]}
            />
            <Dropdown
              type="equipements_description"
              name="Equipements"
              content={house?.equipments}
            />
          </section>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Location;
