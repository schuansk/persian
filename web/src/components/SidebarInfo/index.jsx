import React from 'react'

import './styles.css'

export default function SidebarInfo() {
    return (
        <div className="svg">
            <svg width="720" height="1024" viewBox="0 0 720 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="left-background-login">
                    <path id="bg-behind" d="M642 800.5C658 932.1 581.667 1005 541.5 1025H-281.5V0H686C637.833 58.1667 565.2 203 660 317C754.8 431 716.833 526.167 686 559.5C664.667 585 626 668.9 642 800.5Z" fill="#6C63FF"/>
                    <g id="bg-above">
                        <g id="bg-above_2" filter="url(#filter0_d)">
                            <path d="M548.683 870.377C547.083 956.966 603.35 1009.54 631.683 1025H-360.929C-360.929 1025 -429.929 0 -323.929 0H668.683C553.683 56.3625 366.183 185.348 536.183 250.389C748.683 331.691 739.183 598.041 668.683 645.925C598.183 693.808 550.683 762.141 548.683 870.377Z" fill="#FE6D6D"/>
                        </g>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d" x="-387" y="-4" width="1104.8" height="1033" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}