import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('https://coffee-shop-app-server.vercel.app/coffeemenu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    console.log(menu);
    return (
        <div className='bg-gray-900 px-5 md:px-20 py-20'>
            <div>
                <p className='text-5xl text-orange-800 font-bold mb-10'>Menu Items</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    menu.slice(0, 3).map(menus => 
                    <MenuCard
                        key={menus._id}
                        data={menus}>
                    </MenuCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/allmenu'><button className='w-40 border mx-auto btn btn-primary'>See More</button></Link>
            </div>
        </div>
    );
};

export default Menu;