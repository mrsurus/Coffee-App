import React, {  useEffect, useState } from 'react';
import MenuCard from '../Menu/MenuCard';

const AllMenu = () => {
    const [allmenu, setAllmenu] = useState([])

    useEffect(()=>{
        fetch('https://coffee-shop-app-server.vercel.app/coffeemenu')
        .then(res => res.json())
        .then(data => setAllmenu(data))
    }, [allmenu])

    return (
        <div className='bg-gray-800 grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-20'>
            {
                allmenu.map(menu =>
                 <MenuCard
                 key={menu._id}
                 data={menu}
                 >

                </MenuCard>)
            }
        </div>
    );
};

export default AllMenu;