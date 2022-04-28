import { Link } from "react-router-dom";

// Composant fonctionnel : simple fonction JavaScript qui renvoie du JSX.
// Utilisation de props pour les cards via Home
// Props : Dans un composant fonctionnel, les propriétés sont passées comme argument de la fonction.
// entrées d’un composant React. Elles sont passées d’un composant parent à un composant enfant.
// props en lecture seule

/* 
 * @param {*} props création composant Gallery 
 * @returns Card comportant des logements en miniatures 
 */

function Card(props) {
	return (
		<div className="Card">
    <Link to={props.link}>
        <img src={props.cover} alt="Logement" />
        <div className="CardTitle"><h3>{props.title}</h3></div>
    </Link>
    </div>

	)
}
export default Card;