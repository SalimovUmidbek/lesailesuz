import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../src/assets/icontelegram.webp'
import rasm from '../src/assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div className='flex items-center gap-[30px] ben'>
        <div>
          <button className='w-[139px] h-[41px] bg-black rounded-[10px] why' >
            <Link className='text-white flex items-center justify-evenly' to={'https://t.me/im_slmv'}><img className='w-[30px] h-[30px]' src={logo} alt="" /> telegram</Link>
          
            
          </button>

        </div>
        <div>
          <div className='flex abi'>
          
            <NavLink className={'w-[100px]'} to={'/about'}>Biz haqimizda</NavLink>
            <NavLink className={'w-[50px]'} to={'/products'}>Menyu</NavLink>
            <NavLink className={'w-[65px]'} to={'/contact'}>Aksiyalar</NavLink>
            <NavLink className={'w-[50px]'} to={'/filiallar'}>Filiallar</NavLink>
            <NavLink className={'w-[75px]'} to={'/kontaktlar'}>Kontaktlar</NavLink>
            
          
            {/* <NavLink to={'/'}>home</NavLink> */}
          </div>
        </div>
      </div>
      <hr />
      
        <div className='flex justify-between items-center falo'>
          <div>
            <h1>2024 Barcha huquqlar himoyalangan</h1>
          </div>
          <img className='w-[197px] h-[50px]' src={rasm} alt="" />
          <div>
            <h1>Project by: Salimov Umidbek</h1>
          </div>
        </div>
      <hr />
    </div>
  )
}

export default Footer