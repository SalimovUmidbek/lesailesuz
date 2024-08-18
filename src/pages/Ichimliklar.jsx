import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Salatlar from './Salatlar'

const Ichimliklar = () => {


    const [tokens, setChickens] = useState([])
    const getResponse = async () => {
        try {
            const response = await axios.get(
                "https://c522a9a1bfb5e64a.mokky.dev/ichimliklar1"
            )
            setChickens(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getResponse()
    },[])
  return (
    <div id="ichimliklar">
      <h1 className="text-4xl pt-5">Ichimliklar</h1>
      <ul className="grid1 flex flex-wrap gap-[15px]">
        {tokens.map((chickens) => (
          <li
            key={chickens.id}
            className="shadow-xl rounded-[15px] w-[281px] h-[431px]"
          >
            <Link to={`/ichimliklar/${chickens.id}`}>
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
                <button className="w-[40px] h-[40px] bg-[#fc004a] rounded-[10px] text-white text-[20px] font-800">
                  +
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Salatlar/>
      
    </div>
  )
}

export default Ichimliklar