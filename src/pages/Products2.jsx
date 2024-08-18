import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Product3 from './Product3'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'

const Products2 = () => {


  const [tokens, setTokens] = useState([])

  const {getBasketData, setBasket} = useContext(BasketContext)

  const getResponse = async () =>{
    try {
      const response = await axios.get('https://58c74283afd0d783.mokky.dev/products2')
      setTokens(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    getResponse()
  },[])
  return (
    <div id='tovuqcha'>
      <h1 className='text-4xl pt-5'>Tovuqcha</h1>
      <ul className='grid1 flex flex-wrap gap-[15px]'>
        {
          tokens.map((products) =>(
            <li key={products.id} className='shadow-xl rounded-[15px] w-[281px] h-[431px]'>
              
              <Link to={`/products2/${products.id}`}>
                <div className='flex justify-center pt-[50px]'>
                  <img className='h-[235px] w-[235px]' src={products.img} alt="photo" />
                </div>
                <div className='flex justify-between items-center px-[15px] pt-[50px]'>
                  <div>
                    <h1>{products.title}</h1>
                    <b className='text-[#fc004a] text-[20px] font-normal'>{products.price}</b>
                  </div>
                  
                </div>
                </Link>

                <div className="flex justify-end mx-[10px] mt-[-10px]">

                    <button onClick={() => getBasketData(products)} className="w-[40px] h-[40px] bg-[#fc004a] rounded-[10px] text-white text-[20px] font-800 ">
                      +
                    </button>
                </div>
              
              
            </li>
          ))
        }
      </ul>
      <Product3/>
    </div>
    
  )
}

export default Products2