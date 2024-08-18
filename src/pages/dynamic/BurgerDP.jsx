import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BurgerDP = () => {
  const [data, setData] = useState({})
  const params = useParams()
 
  const getData = async () =>{
    try {
      const response = await axios.get(`https://f0c5f8b2068e3da3.mokky.dev/burger1/${params.id}`)
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    getData()
  }, [params])
  return (
    <div>
      <div>
        <div className="w-full container px-16 py-[60px] border mx-auto mb-[30px] m-[40px]">
          <div className="flex w-full gap-[50px] items-center">
            <div>
              <img className="w-[300px]" src={data.img} alt="" />
            </div>
            <div className="w-[400px]">
              <h1 className="font-bold text-[40px]">{data.title}</h1>
              <h1 className="w-[700px] text-[20px] text-[#6E7C87]">
                {data.text}
              </h1>
              <p>{data.price}</p>
              <button className='w-[384px] h-[68px] bg-[#fc004a] text-white rounded-[10px] mt-[30px]'>Savatga</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerDP