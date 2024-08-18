import { useContext, useEffect, useState } from "react"
import axios from "axios";
import SwiperUZ from "./swiper";
import Products2 from "./Products2";
import { Link } from "react-router-dom";
import Carausel from "./Carausel";
import ProductProvider from "../context/ProductContext";
import { ProductsContext } from "../context/ProductContext";
import { BasketContext } from "../context/BasketContext";


const Products = () => {

  

  const [products, setProducts] = useState([]);

  const {getBasketData , setBasket} = useContext(BasketContext)

  const getData = async () =>{
    try {
      const response = await axios.get('https://e6144872aa102f69.mokky.dev/products')
      setProducts(response.data)
    } catch (error) { 
      console.log(error);
    }
  }

  useEffect(() =>{
    getData()
  },[])

  return (

    

      <div>
          {/* svp */}
          <SwiperUZ/>



          {/* karusel */}


          <Carausel/>
      <div id="setlar">
      <h1 className="text-4xl pt-5">Setlar</h1>
        <ul className="grid1 flex flex-wrap gap-[15px]">
          {products.map((item)=>(
              <li key={item.id} className="shadow-xl rounded-[15px] w-[281px]">
                <Link to={`/products/${item.id}`}>
                  <div className="flex justify-center pt-[50px]">
                    <img className="h-[235px] w-[235px]" src={item.img} alt="photo" />
                  </div>
                  <div className="flex justify-between items-center px-[15px] pt-[50px]">
                    <div>
                      <h1>{item.title}</h1>
                      <b className="text-[#fc004a] text-[20px] font-normal">{item.price}</b>
                    </div>
                    
                  </div>
                </Link> 

                <div className="flex justify-end mx-[20px] mb-[20px]">

                    <button onClick={() => getBasketData(item)} className="w-[40px] h-[40px] bg-[#fc004a] rounded-[10px] text-white text-[20px] font-800 ">
                      +
                    </button>
                </div>
              </li>
    
            ))
          }
        </ul>
      </div>
        <Products2/>
        
      </div>
    
    
  )
}

export default Products