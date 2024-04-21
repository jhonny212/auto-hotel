import React, { useState } from 'react'
import { Fotter } from '../components/Fotter'
import Auto1 from '../assets/auto2.jpg'
import './Rooms.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const AllRooms = () => {

  const [rooms, setRooms] = useState([
    {
      img: Auto1,
      description: 'Lorem Ipsum is simply dummy text from the printing and typeseting industry',
      title: 'Premium',
      key: 'premium'
    },
    {
      img: Auto1,
      description: 'Lorem Ipsum is simply dummy text from the printing and typeseting industry',
      title: 'Semi Premium',
      key: 'semipremium'
    },
    {
      img: Auto1,
      description: 'Lorem Ipsum is simply dummy text from the printing and typeseting industry',
      title: 'Basico',
      key: 'basico'
    }
  ])

  return <>
    <div id='header-title' className='text-center mt-10 mb-0 p-0'>
      <h1 className="text-5xl font-extrabold text-gray-100">HABITACIONES</h1>
    </div>
    <div className='flex items-center justify-center '>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-11 mx-[5%] w-full main-container">
        {rooms.map(({ img, description, title, key }) => {
          return <>
            <div className="card relative flex hover:translate-y-5">
              <img src={img} className='w-full ' />
              <div className="info">
                <h1 className='lg:text-5xl text-3xl font-extrabold dark:text-gray-300'>{title}</h1>
                <h2 className='lg:text-xl text-2xs'>{description}</h2>
                <button>
                  <a href={`rooms/${key}`}>
                    Ver fotos
                  </a>
                </button>
              </div>
            </div>
          </>
        })}
      </div>
    </div>

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
