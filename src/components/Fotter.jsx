import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'


library.add(faWhatsapp)
export const Fotter = () => {
    return <>
        <footer className="bg-gray-900 dark:bg-gray-900 w-full " style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div className="w-full p-4 py-6 lg:py-8">
                <div className="sm:items-center sm:justify-start grid grid-cols-2 gap-4">
                    <div id='contact-us'>
                        <h1 className='text-xl mb-3 text-gray-50'>
                            Sobre nosotros
                        </h1>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium border-t-2 border-gray-500 pt-5'>
                            <li className='pt-1'>
                                <p className='text-gray-400 '>
                                    Auto hotel
                                </p>
                            </li>
                            <li className='pt-7' style={{visibility: 'hidden'}}>
                                s
                            </li>
                        </ul>
                    </div>

                    <div id="social-contact" className="flex flex-col items-end justify-end">
                        <h1 className='text-xl text-gray-50 mb-3'>
                            Contactos
                        </h1>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium border-t-2 border-gray-500 pt-5'>
                            <li className='pt-1'>
                                <FontAwesomeIcon size='2x' color='white' icon={faWhatsapp} />
                                <span className='ml-2'>
                                <a href="https://wa.me/50248441018?text=Deseo reservar!">+502 48441018</a>
                                </span>
                            </li>
                            <li className='pt-1'>
                                <FontAwesomeIcon size='2x' color='white' icon={faLocationDot} />
                                <span className='ml-2'>
                                    <a href={`https://www.google.com/maps?q=${15.0327380},${-91.0291750}`}>
                                    Chinique las flores santa cruz del Quiche en la entrada de potrero viejo
                                    Kilómetro 181
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </>
}
