import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



const Products = () => {
    const { data, cart, setCart } = useContext(dataContext);
    const buyProducts = (product) => {
      console.log(product);
      setCart([...cart, product])
    };


  return data.map((product)=> {
    return(


      <div className="card" key={product.id}>
          <div className=" min-h-full aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64">
            <img src={product.img}/>
          </div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <h4 className="text-sm font-medium text-gray-900">$ {product.price}</h4> 
          <div className="flex justify-end">
            <button onClick={() => buyProducts (product)} type="submit" className=" rounded-md bg-blue-700 px-4 py-1.5 text-sm font-lihgt leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Agregar</button>
          </div>       
      </div>    
      

    )
  })
};

export default Products;
