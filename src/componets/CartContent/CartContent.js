import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
<>
    <div className="fixed w-full z-20 top-0 left-0 bg-white">
      <Navbar/>
    </div>

  {cart.length > 0 ? (
    <div className=" grid justify-center  mt-40  ">
      <div>
        <div >
          <CartElements/>
        </div>
        <div className=" my-5 ">
          <CartTotal/>
        </div>
      </div>
    </div>
     ): (
        <h2 className="cart-message grid justify-items-center"> Carrito vacio</h2>
      )}
</>
  );
     }
export default CartContent; 