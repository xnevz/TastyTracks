import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className='p-5 flex items-center'>
            <Logo className='grow justify-center' />

            <div className='flex justify-center grow items-center gap-5'>
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
            </div>
        </footer>
    );
}
