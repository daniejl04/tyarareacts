import { XCircleIcon} from '@heroicons/react/24/outline'
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({showMenu,active}) => {
  return (
                <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4  bg-black/10 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    <XCircleIcon onClick={showMenu} className='h-8 w-8 cursor-pointer'/>
                    <li><Link to={'/Aretes'}>Aretes</Link></li>
                    <li><Link to={'/Collares'}>Collares</Link></li>
                    <li><Link to={'/Tobilleras'}>Tobilleras</Link></li>
                </ul>
  );
};

export default MenuItems;