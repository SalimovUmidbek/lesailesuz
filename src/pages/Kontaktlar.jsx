import React from 'react'

const Kontaktlar = () => {
  return (
    <div className='kant'>
      <div className="text-3xl pt-[20px]">Biz haqimizda</div>
      <div class="border-b-2 w-24 mb-10 border-[#fc004a] pt-[10px]"></div>
      <div>
        <h1 className='pb-[10px]'>+998712004242</h1>
        <h1>Ish vaqti: har kuni soat 10-00 dan 02-45 gacha</h1>
      </div>

      <div className='w-[724px] h-[442px] border border-gray-400 rounded-2xl p-8 md:w-[724px]'>
        <h1 className='text-[30px]'>Sharhingizni qoldiring</h1>
        <div className='flex justify-between'>
          <div>
            <h1>Ism</h1>
            {/* <input type="text" name='name' className='bg-gray-100 ' /> */}
            <input type="text" name="name" class="bg-gray-100 px-8 py-2 rounded-xl outline-none focus:outline-none w-[320px] h-[41px]">
            </input>
          </div>
          <div>
            <h1>Telefon raqamingiz</h1>
            {/* <input type="text" name='name' className='bg-gray-100 ' /> */}
            <input type="text" name="name" class="bg-gray-100 px-8 py-2 rounded-xl outline-none focus:outline-none w-[320px] h-[41px]" placeholder='+998 '>
            </input>
          </div>
        </div>
        <div className='flex justify-between mt-[50px]'>
          <div>
            <h1>Email Pochtangiz</h1>
            {/* <input type="text" name='name' className='bg-gray-100 ' /> */}
            <input type="text" name="name" class="bg-gray-100 px-8 py-2 rounded-xl outline-none focus:outline-none w-[320px] h-[41px]">
            </input>
          </div>
          <div>
            <h1>Buyurtma soni</h1>
            {/* <input type="text" name='name' className='bg-gray-100 ' /> */}
            <input type="text" name="name" class="bg-gray-100 px-8 py-2 rounded-xl outline-none focus:outline-none w-[320px] h-[41px]" placeholder='Misol uchun: 1,2,3,4 '>
            </input>
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  )
}

export default Kontaktlar