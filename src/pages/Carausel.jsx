import React from "react"
import { Link } from "react-scroll"

const Carausel = () => {
  return (
    <div className="cursor-pointer overflow-x-scroll z-100000 bg-white  border-b-black top-0 sticky"> 
      <div className="flex justify-between py-[30px] top-0 z-20 w-full border-spacing-1 text-center over gap-[10px] carausel">
        <Link
          to={"setlar"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" in bg-[#E5E5E1] w-[69px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          <h1>Setlar</h1>
        </Link>
        <Link
          to={"tovuqcha"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" in bg-[#E5E5E1] w-[94px] rounded-[10px] acive pt-[7px]"
        >
          Tovuqcha
        </Link>
        <Link
          to={"sneklar"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" in bg-[#E5E5E1] w-[99px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Sneklar
        </Link>
        <Link
          to={"lesterlar"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" in bg-[#E5E5E1] w-[83px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Lesterlar
        </Link>
        <Link
          to={"burgerlar"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" in bg-[#E5E5E1] w-[92px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Burgerlar
        </Link>
        <Link
          to={"longerlar"}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className=" in bg-[#E5E5E1] w-[168px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Longerlar
        </Link>
        <Link
          to={"ichimliklar"}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className=" in bg-[#E5E5E1] w-[102px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Ichimliklar
        </Link>
        <Link
          to={"salatlar"}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className=" in bg-[#E5E5E1] w-[102px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Salatlar
        </Link>
        <Link
          to={"donats"}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className=" in bg-[#E5E5E1] w-[79px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Donats
        </Link>
        <Link
          to={"tovuqcha4"}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className=" in bg-[#E5E5E1] w-[122px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Bolajonlarga
        </Link>
        <Link
          to={"tovuqcha5"}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className=" in bg-[#E5E5E1] w-[82px] h-[40px] rounded-[10px] acive pt-[7px]"
        >
          Souslar
        </Link>
      </div>
    </div>
  )
}

export default Carausel
