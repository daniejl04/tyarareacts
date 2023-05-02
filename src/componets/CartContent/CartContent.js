import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



const CartContent = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (

    <div className=" flex flex-col justify-end">
      <div>
        <CartElements/>
        <CartTotal/>
      </div>
    </div>

      ): (
        <h2 className="cart-message"> Esta vacio</h2>
      )
};

export default CartContent; 