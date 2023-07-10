import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/CartContent";
import Aretes from "./componets/Products/Aretes";
import Collares from "./componets/Products/Collares";
import Tobilleras from "./componets/Products/Tobilleras";
import DataProvider from "./componets/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<CartContent />}/>
          <Route path= '/Aretes' element={<Aretes />}/>
          <Route path= '/Collares' element={<Collares />}/>
          <Route path= '/Tobilleras' element={<Tobilleras />}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
