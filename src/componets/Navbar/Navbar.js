import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../assets/Tyara-logo.png';
const Navbar = () => {
  return (
    <div className="nav-container h-32 min-h-max shadow-lg">
        <nav className="navbar ">
          <h1 className="navbar-logo">
            <img src={logo} className="max-w-none max-h-16"/>
          </h1>
          <Link className="setcar" to={"/cart"}>🛒</Link>
        </nav>
    </div>
  );
};

export default Navbar;