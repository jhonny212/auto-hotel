import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import info from '../assets/roomsInfo.json'
import './RoomsCategory.css'


export const RoomsByCategory = () => {

    const { type } = useParams();


    return <>
        <div id='header-title' className='text-center mt-10'>
            <h1 className="text-5xl font-extrabold text-gray-800">Habitaciones</h1>
        </div>

        {info[type].map(({ name, main, path, price, code },index) => {
            return <> <div className='flex justify-center items-center contenedor-imagen'>
                <div className={`my-10 mx-5 w-full md:m-10 md:w-9/12 `}>
                    <h2 className="mt-5 text-3xl text-center mb-5 font-extrabold text-gray-800">{name}</h2>
                    <h3 className="text-2xl text-center mb-5 font-extrabold text-gray-800">Precio: Q{price}</h3>
                    <Link to={"" + code}>
                        
                        <img src={"/"+ path + "/"+ main} className="" alt="..." />
                        <a href="#" className="boton-ver-mas flex justify-center items-center">
                            Ver fotos <FontAwesomeIcon  className="pl-2" size='2x' color='black' icon={faArrowRight} />
                        </a>
                    </Link>
                </div>

                

            </div>
            </>
        })}

        <div className='p-10 mt-10'>
            <button type="button"
                className={
                    `text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                                    focus:ring-gray-300 font-medium rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                                    dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`
                }
            >
                <FontAwesomeIcon size='2xs' color='white' icon={faArrowLeft} /> <a href="/">Regresar </a>
            </button>
        </div>
    </>
}
