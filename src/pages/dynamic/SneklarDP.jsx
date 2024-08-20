import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BasketContext } from "../../context/BasketContext"

const Sneklar = () => {
  const [data, setData] = useState({})
  const params = useParams()

  const {getBasketData, setBasket} = useContext(BasketContext)
  const getData = async () => {
    try {
      const respons = await axios.get(
        `https://16886bcbbd0ee047.mokky.dev/product14/${params.id}`
      )
      setData(respons.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [params])
  return (
    <div>
      <div>
        <div className="w-full container px-16 py-[60px] border mx-auto mb-[30px] m-[40px]">
          <div className="flex w-full gap-[50px] items-center aga">
            <div>
              <img className="w-[300px]" src={data.img} alt="" />
            </div>
            <div className="w-[200px]">
              <h1 className="font-bold text-[40px] w-[448px] theni">{data.title}</h1>
              <h1 className="w-[448px] text-[20px] text-[#6E7C87] idkaboutit">
                {data.text}
              </h1>
              <div>
                <p className="w-[165px] text-[1.875rem]">{data.price}</p>
              </div>
              <button onClick={() => getBasketData(data)} className='w-[384px] h-[68px] bg-[#fc004a] text-white rounded-[10px] mt-[30px] should'>Savatga</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sneklar
