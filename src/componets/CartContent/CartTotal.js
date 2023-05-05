import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

//funcion de suma del total completo
    const total = cart.reduce((acc,el) =>  acc + el.price * el.quanty, 0);

  return (
    <div className="CartTotal grid justify-center">
        <h3>Subtotal: ${total}</h3>
    </div>
)
   
};


export default CartTotal;