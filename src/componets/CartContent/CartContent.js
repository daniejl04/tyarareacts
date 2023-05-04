import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



const CartContent = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (

    <div className=" grid justify-items-center mt-7  ">
      <div>
        <div>
          <CartElements/>
        </div>
        <div className=" my-5 ">
          <CartTotal/>
        </div>
      </div>
    </div>

      ): (
        <h2 className="cart-message grid justify-items-center"> Carrito vacio</h2>
      )
};

export default CartContent; 