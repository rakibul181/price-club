import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='text-2xl list-none mr-10 py-1'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;