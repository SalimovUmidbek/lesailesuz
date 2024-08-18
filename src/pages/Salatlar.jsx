import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'
import Donats from './Donats'
const Salatlar = () => {

    const [salats, setSalats] = useState([])

    const {getBasketData, setBasket} = useContext(BasketContext)

    const getData = async () => {
        try {
            const response = await axios.get('https://dc20d0e3c48d7e4c.mokky.dev/salatlar')
            setSalats(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    },[])
  return (
    <div >
        <div id='salatlar'>
            <h1 className='text-4xl pt-5'>Salatlar</h1>
            <ul className='grid1 flex flex-wrap gap-[15px]'>
            {salats.map((item)=>(
              <li key={item.id} className="shadow-xl rounded-[15px] w-[281px] h-[431px]">
                <Link to={`/salatlar/${item.id}`}>
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

                <div className="flex justify-end mx-[10px] mt-[-10px]">

                    <button onClick={() => getBasketData(item)} className="w-[40px] h-[40px] bg-[#fc004a] rounded-[10px] text-white text-[20px] font-800 ">
                      +
                    </button>
                </div>
              </li>
    
            ))
          }
            </ul>
        </div>
        <Donats/>
    </div>
  )
}

export default Salatlar