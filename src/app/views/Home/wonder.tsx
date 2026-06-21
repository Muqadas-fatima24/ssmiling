import React from 'react'
import Container from '@/app/layout/container';
import Button from '@/app/layout/button2';

export default function Wonder( {heading}:{heading:string}) {
    
  return (
    <div>
      
<section className="bg-[url('/home/start-smiling-wounder.webp')] w-full h-full bg-top bg-cover bg-no-repeat py-20">
     
     <Container>
      <div className=' my-auto flex bg-secondry rounded-md max-w-[600px]  p-8 items-center'>
         <div className='border-dotted border-2 border-white'>
          <div className='flex flex-col items-start justify-center px-5 h-[27vh] mt-3 gap-6 p-auto mb-3'>
            <h2 className=' lg:text-4xl md:text-3xl sm:text-2xl text-xl font-playfair font-bold text-white '>{heading}</h2>
           {/* <div className='flex justify-items-start'> */}
            <Button text='Book Your Consultation' href="#" />  
            {/* </div>         */}
          </div>
          </div>
      </div>
     </Container>
     
</section>


    </div>
  )
}

