import React from 'react'
import imgs from '../assets/whatsapp.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo2.png';
import { DropDown } from './DropDown';

library.add(faWhatsapp)

export const NavBar = () => {
    return <>
        <nav className=" border-gray-200 ">
            <div className="w-auto flex  flex-wrap items-center justify-between mx-auto p-4 bg-black shadow-2xl">

                <DropDown />
                <img src={logo} className="h-10" style={{ borderRadius: '15px' }} alt="Flowbite Logo" />
                <a href="https://wa.me/50248441018?text=Deseo reservar!">
                    <FontAwesomeIcon size='2xl' color='green' icon={faWhatsapp} />
                </a>
            </div>
        </nav>

    </>
}
