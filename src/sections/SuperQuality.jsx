import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
         We have emerged as a revolutionary brand in the footwear industry, blending innovation,
          quality, and sustainability to meet the needs of the modern consumer. With its unique
           approach to designing shoes that prioritize both comfort and style
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
         Najji Shoes caters to diverse lifestyles, ensuring that every step you take is a confident one.
        </p>
        <div className='mt-11'>
          <Button label='View details'  />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
