import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { ShoppingCartIcon, Bars3Icon} from '@heroicons/react/24/outline'
import MenuItems from "./MenuItems";
import TotalItems from "../CartContent/TotalItems";
import logo from '../../assets/Tyara-logo.png';
import "./Navbar.css";



const Navbar = () => {
  const { cart } = useContext(dataContext);

  const [active,setActive] = useState(false)

  const showMenu = () => {
      setActive(!active)
  }

  return (
    <div className="nav-container bg-white h-32 min-h-max shadow-lg">
        <nav className=" fixed w-full  flex justify-between p-4 items-center">
          <Link className="navbar-logo" to={"/"}>
            <img src={logo} className="max-w-none max-h-16"/>
          </Link>

          <div className=' right-6 md:hidden top-7 right-7'>
                <Bars3Icon onClick={showMenu} className='h-6 w-6 scale-150 cursor-pointer'/>
          </div>

          <ul className="hidden md:flex gap-8 p-6  content-center grid gap-x-10 grid-cols-4 font-light">
            <li><Link to={'/Aretes'}>Aretes</Link></li>
            <li><Link to={"/Collares"}>Collares</Link></li>
            <li><Link to={"/Tobilleras"}>Tobilleras</Link></li>
            
          </ul>
          <MenuItems showMenu={showMenu} active={active}/>
          
          <Link className="setcar top-7 right-8 " to={"/cart"}>
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