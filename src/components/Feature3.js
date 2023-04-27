import React, {useState} from 'react';

import { products } from '../data';

import ArrowImg from '../assets/img/product/cards/arrow.svg'



const Feature3 = () => {

  const [index,setIndex] = useState(1)
  const {cardss } = products

  return <>

  <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'>
    {cardss.map((card,cardIndex) => {
      const {icon,title,subtitle,delay} = card

      return (
        <div key  = {cardIndex} data-aos = 'zoom-out' data-aos-offset = '300' data-aos-delay = {delay}>

          <div  className={`w-[350px] h-[350px]  flex flex-col justify-center items-center  ml-[150px] p-[65px] text-center rounded-[12px] cursor-pointer transition-all bg-white shadow-2xl hover:bg-pink-300/20`}>

            <div className='mb-6'>
               <img src = {icon} alt='' className='mx-auto' />
            </div>
            <div className='mb-3 text-[30px] font-medium'>
              {title}
            </div>
            <div className='mb-6 text-light'>{subtitle}</div>

            <img src={ArrowImg} /> 



          </div>

        </div>

      )
    })}
  </div>

  </>;

};

export default Feature3;
