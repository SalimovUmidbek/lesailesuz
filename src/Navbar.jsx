import logo from "./assets/images.svg";
import { Link, NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import Contact from "./pages/Contact";
import Kontaktlar from "./pages/Kontaktlar";
import { useContext, useState } from "react";
import { BasketContext } from "./context/BasketContext";
import Login from "./pages/Login";

import BurgerMenu from "./pages/BurgerMenu";
// import Regis from "./pages/Regis";





const Navbar = () => {
  const { basket } = useContext(BasketContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div id="forposition" className="flex justify-between items-center">
      <div className="flex items-center gap-[20px]">
        <Link to={"/"}>
          <img className="" src={logo} alt="" />
        </Link>
        <button
          onClick={() => {}}
          className="button w-[256px] h-[36px] bg-[#fc004a] rounded-[10px] flex justify-center items-center gap-[10px] text-white"
        >
          <LuMapPin className="text-white" />
          Manzilingizni kiriting!
        </button>
      </div>

      

      <nav className="nav flex pl-[10px] pr-[10px] gap-3 items-center justify-between">
        <NavLink to={"/about"}>Haqimizda</NavLink>
        <NavLink to={"/products"}>Menyu</NavLink>
        <NavLink to={"/contact"}>Aksiyalar</NavLink>
        <NavLink to={"/filiallar"}>Filiallar</NavLink>
        <NavLink to={"/kontaktlar"}>Kontaktlar</NavLink>
      </nav>

      <NavLink
        className={
          "flex button__basket justify-center items-center w-[130px] h-[40px] bg-[#fc004a] text-white rounded-[10px]"
        }
        to={"/karzinka"}
      >
        Savatga|{basket.length}
      </NavLink>


      

      <section className="MOBILE-MENU flex showsomething">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between ">
            <li className="border-b border-gray-400 uppercase">
              <NavLink to={"/about"}>Haqimizda</NavLink>
            </li>
            <li className="border-b border-gray-400 uppercase">
              <NavLink to={"/products"}>Menyu</NavLink>
            </li>
            <li className="border-b border-gray-400 uppercase">
              <NavLink to={"/contact"}>Aksiyalar</NavLink>
            </li>
            <li className="border-b border-gray-400 uppercase">
              <NavLink to={"/filiallar"}>Filiallar</NavLink>
            </li>

            <li className="border-b border-gray-400 uppercase">
              <NavLink to={"/kontaktlar"}>Kontaktlar</NavLink>
            </li>

            
          </ul>


         
        </div>
        <ul className="DESKTOP-MENU hidden  lg:flex">
          <li>
            <NavLink to={"/about"}>Haqimizda</NavLink>
          
          </li>
          <li>
            <NavLink to={"/products"}>Menyu</NavLink>
          
          </li>
          <li>
            <NavLink to={"/contact"}>Aksiyalar</NavLink>
          
          </li>
          <li>
            
            <NavLink to={"/filiallar"}>Filiallar</NavLink>
          
          </li>
          <li>
            <NavLink to={"/kontaktlar"}>Kontaktlar</NavLink>
          </li>
        </ul>
      </section>


      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Navbar;
