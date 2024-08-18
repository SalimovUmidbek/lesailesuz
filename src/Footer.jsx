import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../src/assets/icontelegram.webp'

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <button className='w-[139px] h-[41px] bg-black rounded-[10px]' >
            <Link className='text-white flex items-center justify-evenly' to={'https://t.me/im_slmv'}><img className='w-[30px] h-[30px]' src={logo} alt="" /> telegram</Link>
          
            
          </button>

        </div>
        <div>
          <div className='flex abi'>
          
            <NavLink className={'w-[100px]'} to={'/about'}>Biz haqimizda</NavLink>
            <NavLink className={'w-[100px]'} to={'/products'}>Menyu</NavLink>
            <NavLink className={'w-[100px]'} to={'/contact'}>Aksiyalar</NavLink>
            <NavLink className={'w-[100px]'} to={'/filiallar'}>Filiallar</NavLink>
            <NavLink className={'w-[100px]'} to={'/kontaktlar'}>Kontaktlar</NavLink>
            
          
            {/* <NavLink to={'/'}>home</NavLink> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer