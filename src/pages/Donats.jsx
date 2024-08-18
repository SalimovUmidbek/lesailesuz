import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";

const Donats = () => {
  const [donat, setDonat] = useState([]);
  const {getBasketData, setBasket} = useContext(BasketContext)
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://a41c0e666b3df46f.mokky.dev/donats"
      );
      setDonat(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl pt-5">Donats</h1>

      <ul className="grid1 flex flex-wrap gap-[15px]">
        {donat.map((item) => (
          <li
            key={item.id}
            className="shadow-xl rounded-[15px] w-[281px] h-[431px]"
          >
            <Link
             to={`/donats/${item.id}`}>
              <div className="flex justify-center pt-[50px]">
                <img
                  className="h-[235px] w-[235px]"
                  src={item.img}
                  alt="photo"
                />
              </div>
              <div className="flex justify-between items-center px-[15px] pt-[50px]">
                <div>
                  <h1>{item.title}</h1>
                  <b className="text-[#fc004a] text-[20px] font-normal">
                    {item.price}
                  </b>
                </div>
              </div>
            </Link>

            <div className="flex justify-end mx-[10px] mt-[-10px]">

                <button onClick={() => getBasketData(item)} className="w-[40px] h-[40px] bg-[#fc004a] rounded-[10px] text-white text-[20px] font-800 ">
                  +
                </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donats;
