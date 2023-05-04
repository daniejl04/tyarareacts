import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
    const { cart, setCart} = useContext(dataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find ((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });

        setCart(newCart);
    };

    return cart.map ((product) => {
        return (
            <div className="cartContent px-6 rounded-md shadow-md">
                <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={product.img} className="h-full w-full object-cover object-center"/>
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3> <a href={product.href}>{product.name}</a> </h3>
                                <p className="ml-4">$ {product.price * product.quanty}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{product.mat}</p>
                        </div>
                        <div className="grid px-40">
                            <CartItemCounter product={product} />
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">cant {product.quantity}</p>
                            <div className="flex">
                                <button type="button" className="font-medium text-azul-700 hover:text-azul-500" onClick={() => deleteProduct(product.id)}>Remove</button>
                             </div>
                        </div> 
                    </div>
                </li>
            </div>
        )

    })
}

export default CartElements;

