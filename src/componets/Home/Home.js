import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
const Home = () => {
    return (
    <div className="body">
        <div className="fixed w-full z-20 top-0 left-0 bg-white">
             <Navbar/>
        </div>
        <Banner/>

        {/* <div className="items-center justify-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdD2lkMzIHEYA3ajTne13EM9VYynAl7AvoMr4EUwZ0GTkAEgg/viewform?embedded=true" width="1080" height="400" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </div>  */}

        <div className=" m-24 mt-6 grid grid-cols-1 gap-x-6 gap-y-24 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Products/>
        </div>
            <div className="">
                <Footer/>
            </div>
    </div>

    );
};

export default Home;