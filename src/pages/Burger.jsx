import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Longerlar from "./Longerlar"
import { BasketContext } from "../context/BasketContext"


const Burger = () => {
  const [tokens, setChickens] = useState([])

  const {getBasketData, setBasket} = useContext(BasketContext)
  const getResponse = async () => {
    try {
      const response = await axios.get(
        "https://f0c5f8b2068e3da3.mokky.dev/burger1"
      )
      setChickens(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getResponse()
  }, [])

  return (
    <div id="burgerlar">
      <h1 className="text-4xl pt-5">Burgerlar</h1>
      <ul className="grid1 flex flex-wrap gap-[15px]">
        {tokens.map((chickens) => (
          <li
            key={chickens.id}
            className="shadow-xl rounded-[15px] w-[281px] h-[431px]"
          >
            <Link to={`/burger/${chickens.id}`}>
              <div className="flex justify-center pt-[50px]">
                <img
                  className="h-[235px] w-[235px]"
                  src={chickens.img}
                  alt={chickens.img}
                />
              </div>
              <div className="flex justify-between items-center px-[15px] pt-[50px]">
                <div>
                  <h1>{chickens.title}</h1>
                  <b className="text-[#fc004a] text-[20px] font-normal">
                    {chickens.price}
                  </b>
                </div>
                


              </div>


              
            </Link>

            <div className="flex justify-end mx-[10px] mt-[-10px]">
                <button onClick={() => getBasketData(chickens)} className="w-[40px] h-[40px] bg-[#fc004a] rounded-[10px] text-white text-[20px] font-800 ">
                  +
                </button>
              </div>
          </li>
        ))}
      </ul>
      <Longerlar/>
    </div>
  )
}

export default Burger
