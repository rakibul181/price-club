import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const PriceCart = ({option}) => {
    const {features, name, price} = option 
    return (
        <div className='bg-purple-300 rounded-lg mx-4 p-4'>
             <h1 className='text-white text-8xl font-bold'>{price}<span className=' text-slate-200 text-3xl'>/Month</span></h1>
             <h1 className=' my-3 text-5xl'>{name}</h1>
            <div className='my-4'>
            {
                features.map((feature, idx)=><li className='list-none flex gap-3  text-2xl items-center font-semibold'><CheckCircleIcon className='w-6 h-6 text-green-600 '></CheckCircleIcon> {feature}</li>)
             }
            </div>
            <div>
                <button className='w-full font-bold text-3xl text-white bg-green-500 my-3 py-2 px-6 rounded-lg'>Purchase</button>
            </div>
        </div>
    );
};

export default PriceCart;