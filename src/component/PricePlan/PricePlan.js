import React from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PricePlan = () => {
    const pricePlan = [
        { id: 1, name: 'Free', price: 0, features: ['24/7 support', 'Awesome Support', 'Life Time support', 'Free Shipping', 'No servics Cost', 'Upgrade OnTime'] },
        { id: 2, name: 'Gold', price: 99.99, features: ['24/7 support', 'Awesome Support', 'Life Time support', 'Free Shipping', 'No servics Cost', 'Upgrade OnTime'] },
        { id: 3, name: 'Primium', price: 999.99, features: ['24/7 support', 'Awesome Support', 'Life Time support', 'Free Shipping', 'No servics Cost', 'Upgrade OnTime'] }
    ]

    return (
        <div>
            <h1 className='text-7xl font-bold my-4 bg-purple-300 text-white'>Grabe The Best Deal On Your Town</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricePlan.map(option => <PriceCart key={pricePlan.id} option={option}></PriceCart>)
                }
            </div>
        </div>
    );
};

export default PricePlan;