import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faWhatsapp)
export const SpeedDial = () => {
    return <>
        <div data-dial-init className="fixed bottom-6 group " style={{
            insetInlineEnd: '1.5rem',
            zIndex: 10
        }} >
            <div style={{cursor: 'pointer'}} id="speed-dial-menu-default" className={`flex flex-col items-center mb-4 space-y-2`}>
                <div className=''>
                    <span id={`item-speed-x`} data-tooltip={"aca"} href={"#"} data-tooltip-target={`tooltip-x`} data-tooltip-placement="left"
                        className={`
                            tooltip flex justify-start p-1 rounded-xl items-start  text-gray-500  bg-white 
                            border border-gray-200`}>
                        Reserva aqui!
                    </span>
                </div>
            </div>
            <div className='flex justify-end items-end'>
                <a
                    target='_blank'
                    href='https://wa.me/50248441018?text=Deseo reservar!'
                    data-dial-toggle="speed-dial-menu-bottom-right" aria-controls="speed-dial-menu-bottom-right" aria-expanded="false"
                    className="flex items-center justify-center text-white bg-green-600 rounded-full w-14 h-14 hover:bg-green-500  focus:ring-4 focus:ring-green-800 focus:outline-none ">
                    <FontAwesomeIcon size='2x' color='white' icon={faWhatsapp} />
                </a>
            </div>
        </div>
    </>
}
