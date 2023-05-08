import "./Navbar.css";
import TotalItems from "../CartContent/TotalItems";
import { Link } from "react-router-dom";
import logo from '../../assets/Tyara-logo.png';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'




const Navbar = () => {
  return (
    <div className="nav-container h-32 min-h-max shadow-lg">
        <nav className="navbar ">
          <h1 className="navbar-logo">
            <img src={logo} className="max-w-none max-h-16"/>
          </h1>
          <div >
            <a>Aretes</a>
            <a>Collares</a>
            <a>Tobilleras</a>
            <a>Ear Cuff</a>
          </div>
        

          <Link className="setcar" to={"/cart"}>
          <button
                        type="button"
                        className="rounded-lg  p-1 text-black hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 " >
                        <span className=""><TotalItems/></span>
                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
            
          </Link>
        </nav>
    </div>
  );
};

export default Navbar;