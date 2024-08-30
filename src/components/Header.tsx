

import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from 'antd';

export default function Header() {
    return (
        <header className='bg-white z-10 sticky top-0 p-4 items-center border-b-[1px] flex'>
            {/* logo */}
            <Logo />

            {/* navbar */}
            <ul className='flex gap-8 items-center justify-center grow header-nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='#testimonials'>Testimonials</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='#about'>About</Link></li>
            </ul>


            {/* call to action buttons */}

            <div className='flex gap-2'>
                <Button>Order Now</Button>
                <Button type='primary'>Book A Table</Button>
            </div>
        </header>
    );
}
