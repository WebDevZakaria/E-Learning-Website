import React,{useState} from 'react';

import { product } from '../data';

import ArrowImg from '../assets/img/product/cards/arrow.svg'

const Cards = () => {

  const [index,setindex] = useState()
  const {cards} = product
  
  return <>

  <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] '>

    {cards.map((card,cardIndex) =>{
      const {icon, title, subtitle,delay} = card

      return (<div key = {cardIndex}>
        <div className={`w-[350px] h-[150px] bg-pink-200 flex flex-col p-[65px] text-center rounded-[12px] cursor-pointer transition-all `}>
          <div className='w-full  h-[1300px] '>
            <img src={icon} alt=''/>

          </div>
          
        </div>

      </div> )
    })}
  </div>
  </>;
};

export default Cards;
