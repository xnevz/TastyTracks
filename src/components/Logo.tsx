import React, { HTMLAttributes } from 'react';

export default function Logo(props: HTMLAttributes<HTMLSpanElement>) {
    return (
        <span {...props} className={'flex items-center gap-2 ' + props.className ?? ''}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 10C5.2805 8.34646 6.13729 6.8456 7.41856 5.76338C8.69983 4.68115 10.3228 4.08743 12 4.08743C13.6772 4.08743 15.3002 4.68115 16.5814 5.76338C17.8627 6.8456 18.7195 8.34646 19 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 10H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 14H14C14.5304 14 15.0391 14.2107 15.4142 14.5858C15.7893 14.9609 16 15.4696 16 16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.4 17.4L18.6 14.6C18.9846 14.2287 19.5009 14.0254 20.0354 14.0347C20.5698 14.0441 21.0787 14.2654 21.45 14.65C21.8213 15.0346 22.0246 15.5509 22.0153 16.0853C22.0059 16.6198 21.7846 17.1287 21.4 17.5L17.8 20.8C17.1 21.6 16.1 22 15 22H11C9.9 22 8.9 21.6 8.2 20.8L5 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 14V21H2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='font-extrabold'>TastyTracks</span>
        </span>
    );
}
