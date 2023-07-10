import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

//funcion de suma del total completo
    const total = cart.reduce((acc,el) =>  acc + el.price * el.quanty, 0);

  return (
    <div className="CartTotal grid justify-center">
        <h3 className="">Subtotal: ${total}</h3>
        <button className="rounded-md bg-blue-700 px-4 py-1.5 text-sm font-lihgt leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Comprar</button>
    </div>


)
   
};


export default CartTotal;