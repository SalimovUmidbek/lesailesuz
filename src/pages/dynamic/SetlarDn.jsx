import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContext';

const SetlarD = () => {
  const [data, setData] = useState({});
  const params = useParams();

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const {getBasketData, setBasket} = useContext(BasketContext)

  const handleImageClick = () => {
    const newCount = count + 1;
    const newTotal = total + 45000;
    setCount(newCount);
    setTotal(newTotal);
  };
  
  const getData = async () => {
    try {
      const respons = await axios.get(
      `https://e6144872aa102f69.mokky.dev/products/${params.id}`
      );
      setData(respons.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  },[params]);
  

  
  return (
    <div>
      
      <div>
    <div className="w-full container px-16 py-[60px]  mx-auto mb-[30px] m-[40px]">

      <div className="flex w-full gap-[50px] items-center aga">
        <div>
          <img onClick={handleImageClick} className='w-[300px]' src={data.img} alt="" />
        </div>
       <div className='w-[200px]'>
        <h1 className="font-bold text-[40px] w-[384px]">{data.title}</h1>
        <h1 className="w-[700px]  text-[#6E7C87]">{data.text}</h1>
        <div>
          <p className='text-[1.78rem] font-bold'>{data.price}</p>
        </div>

        <button onClick={() => getBasketData(data)} className="w-[384px] h-[68px] bg-[#fc004a] text-white rounded-[10px] mt-[30px]">
          Savatga
        </button>

        <div>
      <button onClick={handleImageClick}>
        
      </button>
      <div className='w-[300px]'>
        <p className='text-[30px]'>Soni: {count}</p>
        <p className='text-[25px]'>Umumiy: {total} so'm</p>
      </div>
    </div>
       </div>
      </div>
      <div>
      </div>
  </div>
</div>
    </div>
  )
}

export default SetlarD