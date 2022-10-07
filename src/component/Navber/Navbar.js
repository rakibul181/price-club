import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open ,setOpen] = useState(false)

    const routes =[
  {id:1, name:'Home', path:'./home'},
  {id:2, name:'About', path:'./home'},
  {id:3, name:'Contact', path:'./home'},
  {id:4, name:'Product', path:'./home'}
]
    return (
        <div  className=' flex md:justify-center bg-purple-200 '>
             <div onClick={()=>(setOpen(!open))} className='my-1 h-6 w-6 md:hidden'>
                  
                  <span>{open?  <XMarkIcon></XMarkIcon>:<Bars3Icon  ></Bars3Icon>}</span>
             </div>

          <ul className={`bg-purple-200 w-full md:flex justify-center md:static   absolute duration-300 ease-in ${open? 'top-6':'top-[-150px]'}`} >
                {
            routes.map(route=><Link key={route.id} route={route}></Link> )
          }
            </ul>
    
        </div>
    );
};

export default Navbar;