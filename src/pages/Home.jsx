import React, { useState } from 'react'
import {  faLocationDot, faClock, faBed, faGem, faCoins, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from '../components/Carousel'
import { MapComponent } from '../components/MapComponent'
import room1 from '../assets/Frente/_MRM0022.png'
import room2 from '../assets/Frente/_MRM0025.png'
import room3 from '../assets/Frente/_MRM0035.png'
import room4 from '../assets/Frente/_MRM0041.png'
import room5 from '../assets/Frente/_MRM0043.png'
import room6 from '../assets/Frente/_MRM0045.png'
import room7 from '../assets/Frente/_MRM0103.png'



export const Home = () => {
    const [images, setImages] = useState([room1, room3, room4, room5, room2, room6, room7])

    return <>
        <div className='w-full'>


            <section className='mt-5 px-10'>
                <div id='header-title' className='text-center'>
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-100">AUTO HOTEL MOMENTOS MAGICOS</h1>
                </div>
            </section>

            <div className='flex items-center justify-center mb-0 mt-10'>
                <div id='root-container-carousel' className=' mt-0 mb-0 w-full  xl:w-8/12 lg:w-7/12 2xl:w-8/12'>
                    <Carousel className='-z-10 h-[400px] md:h-[400px] xl:h-[620px] lg:h-[400px] 2xl:h-[580px]' images={images} redirectImage={false} />
                </div>
            </div>

            <div id='schedule' className='mt-5 mb-5'>

                <div className="info grid gap-3 mx-10 mt-10 grid-cols-2 items-start justify-center text-center">
                    <div className='hours p-2 h-full items-center justify-center bg-gray-500'>
                        <h2 className="lg:text-4xl text-2xl mb-2  font-semibold text-gray-100">Atención</h2>
                        <ul className="space-y-4 text-lg flex items-center justify-center text-gray-200">
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <span>Todos los dias las 24 horas</span>
                            </li>
                        </ul>
                    </div>


                    <div className='location p-2 items-center justify-center bg-gray-500'>
                        <h2 className="lg:text-4xl text-2xl mb-2 font-semibold text-gray-100">Ubicación</h2>
                        <ul className="space-y-4 text-lg  flex items-center justify-center text-gray-200">
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <span>Chinique las flores santa cruz del Quiche
                                    en la entrada de potrero viejo Kilómetro 181</span>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

            <section className='mt-10 pt-0 w-full'>
                <div className='grid grid-cols-1 gap-2 m-10 mt-0 pt-0'>

                    <div className='bg-yellow-400 text-center m-5 shadow-2xl'>
                        <FontAwesomeIcon size='2x' color='text-gray-100' className='mt-5' icon={faGem} />
                        <div className='text-3xl'>
                            <h2 class="font-semibold mb-5">Habitaciones de lujo:</h2>
                            <ul class="text-2xl">
                                <li>
                                    Habitacion 4
                                </li>
                                <li>
                                    Habitacion 10
                                </li>
                                <li>
                                    Habitacion 12
                                </li>
                            </ul>
                        </div>

                        <div className='flex items-center justify-center mt-5 mb-5'>
                            <div className='bg-gray-700 w-6/12 h-[1px]'>

                            </div>
                        </div>

                        <div className='h-[80px] mt-10 mb-0' id='section-rooms'>
                            <a className={`text-white  border-[2px] border-white
                             focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
                             rounded-lg text-sm px-5 py-2.5 text-center  bg-[#FF9045]
                             hover:bg-black
                             hover:border-black
                            `}
                                href="rooms/premium">Ver habitaciónes de lujo</a>
                        </div>
                    </div>

                    <div className='bg-yellow-400 text-center m-5 shadow-2xl'>
                        <FontAwesomeIcon size='2x' color='text-gray-100' className='mt-5' icon={faStar} />
                        <div className='text-3xl'>
                            <h2 class="font-semibold mb-5">Habitaciones estándar:</h2>
                            <ul class="text-2xl">
                                <li>
                                    Habitacion 1
                                </li>
                                <li>
                                    Habitacion 2
                                </li>
                                <li>
                                    Habitacion 5
                                </li>
                                <li>
                                    Habitacion 6
                                </li>
                                <li>
                                    Habitacion 9
                                </li>
                                <li>
                                    Habitacion 11
                                </li>
                            </ul>
                        </div>

                        <div className='flex items-center justify-center mt-5 mb-5'>
                            <div className='bg-gray-700 w-6/12 h-[1px]'>

                            </div>
                        </div>

                        <div className='h-[80px] mt-10 mb-0'>
                            <a className={`text-white  border-[2px] border-white
                             focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
                             rounded-lg text-sm px-5 py-2.5 text-center  bg-[#FF9045]
                             hover:bg-black
                             hover:border-black
                            `}
                                href="rooms/semi_premium">Ver habitaciónes estándar</a>
                        </div>
                    </div>

                    <div className='bg-yellow-400 text-center m-5 shadow-2xl' >
                        <FontAwesomeIcon size='2x' color='text-gray-100' className='mt-5' icon={faCoins} />
                        <div className='text-3xl'>
                            <h2 class="font-semibold mb-5">Habitaciones económica:</h2>
                            <ul class="text-2xl">
                                <li>
                                    Habitacion 3
                                </li>
                                <li>
                                    Habitacion 7
                                </li>
                                <li>
                                    Habitacion 8
                                </li>
                            </ul>
                        </div>

                        <div className='flex items-center justify-center mt-5 mb-5'>
                            <div className='bg-gray-700 w-6/12 h-[1px]'>
                            </div>
                        </div>

                        <div className='h-[80px] mt-10 mb-0'>
                            <a className={`text-white  border-[2px] border-white
                             focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
                             rounded-lg text-sm px-5 py-2.5 text-center  bg-[#FF9045]
                             hover:bg-black
                             hover:border-black
                            `}
                                href="rooms/basic">Ver habitaciónes económica</a>
                        </div>
                    </div>

                    {/* <div className='button flex items-center justify-center'>
                        <button type="button"
                            className={
                                `text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                                    focus:ring-gray-300 rounded-lg dark:bg-gray-800 
                                    dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
                                    font-medium  px-4 py-2.5 me-2 mb-2
                                    `
                            }
                        >
                            <a href="rooms/premium">Habitación premium <FontAwesomeIcon size='2xs' color='white' icon={faArrowRight} /></a>
                        </button>
                    </div>

                    <div className='button flex items-center justify-center'>
                        <button type="button"
                            className={
                                `text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                                    focus:ring-gray-300 font-medium rounded-lg px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 
                                    dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`
                            }
                        >
                            <a href="rooms/semi_premium">Habitación semi premium <FontAwesomeIcon size='2xs' color='white' icon={faArrowRight} /></a>
                        </button>
                    </div>

                    <div className='button flex items-center justify-center'>
                        <button type="button"
                            className={
                                `text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                                    focus:ring-gray-300 font-medium rounded-lg px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 
                                    dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`
                            }
                        >
                            <a href="rooms/basic">Habitación basica <FontAwesomeIcon size='2xs' color='white' icon={faArrowRight} /></a>
                        </button>
                    </div> */}
                </div>

                <div className='maps lg:p-5 mb-5 mx-10 h-[400px] md:h-[600px]  '>
                    <a href={`https://www.google.com/maps?q=${15.0327380},${-91.0291750}`}>
                        <MapComponent lat={15.0327380} long={-91.0291750} />
                    </a>
                </div>
            </section>
        </div>
    </>
}