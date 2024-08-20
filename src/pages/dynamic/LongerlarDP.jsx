import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BasketContext } from '../../context/BasketContext'

const LongerlarDP = () => {
    const [data, setData] = useState({})
    const params = useParams()

    const {getBasketData, setBAsket} = useContext(BasketContext )

    const getData = async () => {
        try {
          const respons = await axios.get(
          `https://1e9b6959b63fa04d.mokky.dev/longer3/${params.id}`
          );
          setData(respons.data);
        } catch (error) {
          console.log(error);
        }
      };
    

      useEffect(() =>{
        getData()
      },[params])

  return (
    <div>
      <div>
    <div className="w-full container px-16 py-[60px]  mx-auto mb-[30px] m-[40px]">
      <div className="flex w-full gap-[50px] items-center aga">
        <div>
          <img className='w-[300px]' src={data.img} alt={data.img} />
        </div>
       <div className='w-[200px]'>
        <h1 className="font-bold text-[40px] w-[384px] theni">{data.title}</h1>
        <h1 className="w-[700px]  text-[#6E7C87] idkaboutit">{data.text}</h1>
        <div>
        <p className='text-[1.78rem] font-bold'>{data.price}</p>
        </div>
        <button onClick={() => getBasketData(data)} className='w-[384px] h-[68px] bg-[#fc004a] text-white rounded-[10px] mt-[30px] should'>Savatga</button>
       </div>
      </div>
      <div>
      </div>
  </div>
</div>
    </div>
  )
}

export default LongerlarDP