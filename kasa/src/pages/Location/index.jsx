import React from 'react';
import { useParams } from 'react-router-dom';
import { housing } from '../../data/logements';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Rating from "../../components/Rating";
import Tag from '../../components/Tags';
import Dropdown from '../../components/Dropdown';
import Carrousel from '../../components/Carrousel';
import Error404 from '../../components/Error';



// useParams : Il est courant d'utiliser la valeur des paramètres d'URL pour déterminer ce qui est affiché dans le composant rendu par une route dynamique.
// permet d'accéder à la valeur des paramètres d'URL. 
// Lorsqu'elle est appelée, useParams()renvoie un objet qui mappe les noms des paramètres d'URL à leurs valeurs dans l'URL actuelle.

const Location = () => {
    // Obtention de l'identifiant de l'annonce à partir de l'URL.
    let {id} = useParams();
    // Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL. 
    const house = housing.find(house=>house.id===id)
    // penser à retirer le console.log
    console.log(house);

    if(!house){
        return <Error404 />
    }

    return (
        <div>
            <Header />
            <Carrousel image={house.pictures[0]} key={house.pictures[0]} pictures={house.pictures} />

            <section className='infos'>
                <div className="infos__title_localisation_tags">
                    <div className="infos__title_localisation">
                        <h2 className="infos__title">{house.title}</h2>
                        <h5 className="infos__localisation">{house.location}</h5>
                    </div>
                    <div className="infos__tags">
                        {house.tags.map((tag)=>( <Tag name={tag} key={tag} /> ))}
                    </div>
                </div>
                <div className="infos__host_rate">
                    <div className="infos__host">
                        <p className="infos__hostName">{house.host.name}</p>
                        <img className='infos__hostPicture' src={house.host.picture} alt={house.host.name}/>
                    </div>
                    <div className="infos__rate" id='rating'>
                        <Rating rate={house.rating} />
                    </div>
                </div>
            </section>

            <section className='dropdowns'>
                <Dropdown type='equipements_description' name='Description' content={house.description} />
                <Dropdown type='equipements_description' name='Equipements' content={house.equipments}/>
            </section>

            <Footer/>

        </div>
    )
};
    
export default Location;





