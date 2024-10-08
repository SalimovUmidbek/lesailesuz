import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const IchimliklarDP = () => {
  const [data, setData] = useState({})
  const params = useParams()

  const getData = async () =>{
    try {
      const response = await axios.get(`https://c522a9a1bfb5e64a.mokky.dev/ichimliklarr/${params.id}`)
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
        <div className="w-full container border mx-auto mb-[30px] ">
          <div className="flex w-full gap-[50px] items-center aga">
            <div>
              <img className="w-[300px]" src={data.img} alt="" />
            </div>
            <div className="w-[200px]">
              <h1 className="font-bold text-[40px] theni">{data.title}</h1>
              <h1 className="w-[700px] text-[20px] text-[#6E7C87] idkaboutit">
                {data.text}
              </h1>
              
              <p>{data.price}</p>
              <button className='w-[384px] h-[68px] bg-[#fc004a] text-white rounded-[10px] mt-[30px] mb-[20px] should'>Savatga</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IchimliklarDP