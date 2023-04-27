import React from 'react';
import { FaHeart,FaRegHeart  } from 'react-icons/fa';


import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { product } from '../data';

const Product = () => {

  const {title,subtitle,cards} = product

  const slideLeft = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
}


const slideRight = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
}

const slideLeftt = ()=>{
  var slider = document.getElementById('sliderr')
  slider.scrollLeft = slider.scrollLeft - 500
}


const slideRightt = ()=>{
  var slider = document.getElementById('sliderr')
  slider.scrollLeft = slider.scrollLeft + 500
}



  return <section className='section'>

      <div className='container mx-auto'>

        <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20 '>
          <h2 className='section-title' data-aos = 'fade-up' data-aos-offset = '400' data-aos-delay = '300' >{title}</h2>
          <p className='lead lg:max-w-[350px]' data-aos = 'fade-up' data-aos-offset = '400' data-aos-delay = '300'>{subtitle}</p>
        </div>

        <h2 className='text-center mb-8 text-2xl font-primary text-cyan-500'>Web Developement Courses </h2>

        <div className='relative flex items-center group  '>

        


    
        <MdChevronLeft className='bg-white left-0   rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick = {slideLeft}/>

        <div id = 'slider' className = 'w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>

            {cards.map((item,id)=>{

      const {icon, title, subtitle,delay} = item

        return (
  <div key = {id} className='w-[160px] sm:w-[240px] lg:w-[300px] inline-block cursor-pointer relative  p-6 rounded-2xl  '>

  <img className='w-full h-auto block rounded-2xl hover:w-[4000px]  ' src={icon} alt={title} />

  <div className='absolute top-0  left-0 w-full h-full hover:bg-red-100/20   opacity-0 hover:opacity-100  text-white text-[200px] '>

    <p className='white-space-normal  md:text-lg font-bold flex justify-center items-center h-full text-center text-[200px]'>{title}</p>

  </div>
  </div>

)

})}


</div>
        <MdChevronRight className='bg-white right-0  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick = {slideRight}/>
    </div>


    <h2 className='text-center mb-8 mt-20 text-2xl font-primary text-cyan-500'>Digital Marketing Courses </h2>
        
        <div className='relative flex items-center group'>

        <MdChevronLeft className='bg-white left-0   rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick = {slideLeftt}/>

        <div id = 'sliderr' className = 'w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>

            {cards.map((item,id)=>{

      const {icon, title, subtitle,delay} = item

        return (
  <div key = {id} className='w-[160px] sm:w-[240px] lg:w-[300px] inline-block cursor-pointer relative  p-6 rounded-2xl  '>

  <img className='w-full h-auto block rounded-2xl hover:w-[4000px]  ' src={icon} alt={title} />

  <div className='absolute top-0  left-0 w-full h-full hover:bg-red-100/20   opacity-0 hover:opacity-100  text-white text-[200px] '>

    <p className='white-space-normal  md:text-lg font-bold flex justify-center items-center h-full text-center text-[200px]'>{title}</p>

  </div>
  </div>

)

})}


</div>
        <MdChevronRight className='bg-white right-0  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick = {slideRightt}/>
    </div>


      </div>
    </section>;
};

export default Product;
