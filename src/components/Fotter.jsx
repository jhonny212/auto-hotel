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
                <div className="grid grid-cols-2 gap-4">
                    <div id='contact-us' className=''>
                        <h1 className='text-xl mb-3 text-gray-50 border-b-2 border-gray-400'>
                            Sobre nosotros
                        </h1>
                        <ul className='text-gray-400 dark:text-gray-400 font-medium pt-5'>
                            <li className='pt-1'>
                                <p className='text-gray-400 justify-start text-wrap'>
                                Más que un hotel: un universo de habitaciones para vivir una experiencia inolvidable.
                                Nuestras habitaciones son únicas y con el confort que se merecen nuestros visitantes, 
                                tenemos los mejores precios y la mejor atención
                                </p>
                            </li>
                            <li className='pt-1'>
                                <FontAwesomeIcon size='2x' color='white' icon={faLocationDot} />
                                <span className='ml-2'>
                                    <a href={`https://www.google.com/maps/place/Auto+Hotel+Momentos+Magicos/@15.0325901,-91.0293132,21z/data=!4m12!1m5!3m4!2zMTXCsDAxJzU3LjkiTiA5McKwMDEnNDUuMCJX!8m2!3d15.032738!4d-91.029175!3m5!1s0x858be3c49830b0e3:0x4c3b04f1bd62096f!8m2!3d15.0327405!4d-91.0291667!16s%2Fg%2F11vspj0dp1?entry=ttu`}>
                                    Chinique las flores santa cruz del Quiche en la entrada de potrero viejo
                                    Kilómetro 181
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div id='social-contact' className=''>
                        <h1 className='text-xl mb-3 text-gray-50 border-b-2 border-gray-40'>
                            Contactos
                        </h1>
                        <ul className='text-gray-400 dark:text-gray-400 font-medium pt-5'>
                            <li className='pt-1'>
                                <FontAwesomeIcon size='2x' color='white' icon={faWhatsapp} />
                                <span className='ml-2'>
                                    <a href="https://wa.me/50248441018?text=Deseo reservar!">+502 48441018</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* <div id="social-contact" className="flex flex-col items-start justify-start">
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
                                
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>

    </>
}
