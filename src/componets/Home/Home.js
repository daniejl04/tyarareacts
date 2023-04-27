import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
const Home = () => {
    return (
    <div className="body">
        <Navbar/>
        <Banner/>  
        
         <div className="grid grid-cols-4 gap-6 items-center justify-center m-24">
            <Products/>
        </div>
    </div>

    );
};

export default Home;