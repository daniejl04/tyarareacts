import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


const CartItemCounter = ({product}) => { 
    const {cart, setCart, buyProducts } = useContext(dataContext);

    const decrese = () => {
        const productrepeat = cart.find((item) => item.id === product.id);


        productrepeat.quanty !== 1 &&
        setCart(cart.map((item) => (item.id === product.id ? {...product, quanty : productrepeat.quanty - 1 } : item)))
    };

    return (
      <div className="flex flex-row justify-item-center" >
        <button className="px-3.5 rounded-l-lg bg-azul-900 hover:bg-azul-700 text-white " onClick={decrese}>-</button>
            <p className="px-4">{product.quanty}</p>
        <button className='px-3.5  rounded-r-lg bg-azul-900 hover:bg-azul-700 text-white' onClick={() => buyProducts (product)} >+</button>
      </div>
    )
  }
  
  export default CartItemCounter;