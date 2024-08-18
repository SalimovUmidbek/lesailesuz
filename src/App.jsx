import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SetlarD from "./pages/dynamic/SetlarDn";
import TovuqD from "./pages/dynamic/ToviqchaDN";
import Sneklar from "./pages/dynamic/SneklarDP";
import LesterDP from "./pages/dynamic/LesterDP";
import BurgerDP from "./pages/dynamic/BurgerDP";
import Filiallar from "./pages/Filiallar";
import Kontaktlar from "./pages/Kontaktlar";
import LongerlarDP from "./pages/dynamic/LongerlarDP";
import Login from "./pages/Login";

import IchimliklarDP from "./pages/dynamic/IchimliklarDP";

import Karzinka from "./pages/Karzinka";
import Salats from "./pages/dynamic/SalatlarDP";

import DonatsDP from "./pages/dynamic/DonatsDP";
import Donats from "./pages/Donats";
import { useState } from "react";
import BurgerMenu from "./pages/BurgerMenu";

function App() {
  const [auth, setAuth] = useState(false);

  const handleClick = (e) => {
    setAuth(e);
  };

  return (
    <div>
      <div className="max-w-[1260px] m-auto mt-[20px] px-[40px]">
        <Navbar />
        <hr className="mt-[20px]" />
        {auth && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/filiallar" element={<Filiallar />} />
            <Route path="/kontaktlar" element={<Kontaktlar />} />
            <Route path="/karzinka" element={<Karzinka />} />
            <Route path="/products/:id" element={<SetlarD />} />
            <Route path="/products2/:id" element={<TovuqD />} />
            <Route path="/sneklar/:id" element={<Sneklar />} />
            <Route path="/lester/:id" element={<LesterDP />} />
            <Route path="/burger/:id" element={<BurgerDP />} />
            <Route path="/longerlar/:id" element={<LongerlarDP />} />
            <Route path="/ichimliklar/:id" element={<IchimliklarDP />} />
            <Route path="/salatlar/:id" element={<Salats />} />
            <Route path="/donats/:id" element={<DonatsDP />} />
            <Route path="/login" element={<Login />} />

            <Route path="/menu" element={<BurgerMenu/>}/>
          </Routes>
        )}

        {!auth && <Login tel={handleClick} />}

        <hr />
        <Footer />
        <hr />
      </div>
    </div>
  );
}

export default App;
