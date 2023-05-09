import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import TotalItems from "../CartContent/TotalItems";
import logo from '../../assets/Tyara-logo.png';
import "./Navbar.css";



const Navbar = () => {
  const { cart } = useContext(dataContext);

  return (
    <div className="nav-container bg-white h-32 min-h-max shadow-lg">
        <nav className=" navbar flex justify-between">
          <Link className="navbar-logo" to={"/"}>
            <img src={logo} className="max-w-none max-h-16"/>
          </Link>
          <div className=" content-center grid gap-x-10 grid-cols-4 font-light">
            <a href="">Aretes</a>
            <a href="">Collares</a>
            <a href="">Tobilleras</a>
            <a href="">Ear Cuff</a>
          </div>
          <Link className="setcar" to={"/cart"}>
            <button type="button" className="rounded-lg  p-1 text-black hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 " >
                {cart.length > 0 ? <span className=""><TotalItems/></span> : null}
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </button>  
          </Link>
        </nav>
    </div>
  );
};

export default Navbar;