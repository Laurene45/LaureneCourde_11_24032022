import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';




function Header() {

  return (
    <header className="navlink_wrapper">
    <Link to="/">
        <img src={Logo} alt="Kasa Logo" />
    </Link>
    <nav className="navlink">
        <NavLink
            className={({ isActive }) => (isActive ? "navlink_active" : "navlink_link")}
            to="/"
        >
            Accueil
        </NavLink>
        <NavLink
            className={({ isActive }) => (isActive ? "navlink_active" : "navlink_link")}
            to="/About"
        >
            A Propos
        </NavLink>
    </nav>
</header>
    
  )
}

export default Header