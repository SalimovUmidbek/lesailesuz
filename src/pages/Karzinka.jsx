import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Karzinka = () => {
  const { basket, setBasket } = useContext(BasketContext);
  let Remove = (id) => {
    let newData = basket.filter((item) => item.id !== id);
    setBasket(newData);
  };
  return (
    <div >
      
      <h2 className="text-3xl  pt-[20px] border-b-2 w-28 mb-10 border-[#fc004a] pt-[10px]">
        Savatcha
      </h2>

      <ul className="whatthe flex flex-wrap gap-[15px]">
        {basket.map((item) => (
          <li
            key={item.id}
            className="shadow-xl rounded-[15px] w-[281px] h-[431px]"
          >
            <div className="flex justify-center pt-[50px]">
              <img className="h-[235px] w-[235px]" src={item.img} alt="photo" />
            </div>
            <div className="flex justify-between items-center px-[15px] pt-[50px]">
              <div>
                <h1>{item.title}</h1>
                <b className="text-[#fc004a] text-[20px] font-normal">
                  {item.price}
                </b>
              </div>

              <button
                onClick={() => Remove(item.id)}
                className="w-[80px] h-[40px] bg-[#fc004a] rounded-[10px] text-white text-[20px] font-800"
              >
                remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Karzinka;
