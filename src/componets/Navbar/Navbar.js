import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container min-h-max shadow-lg">
        <nav className="navbar">
          <h1 className="navbar-logo">LOGO</h1>
          <Link className="setcar" to={"/cart"}>🛒</Link>
        </nav>
    </div>
  );
};

export default Navbar;