import React, { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import info from '../assets/roomsInfo.json'

export const Room = () => {

    const [images, setImages] = useState([])
    const { type, id } = useParams();

    useEffect(() => {
        const selectedRoom = info[type].filter(e => e.code == id)[0]
        const newImages = selectedRoom?.images?.map((e) => {
            return `/${type}/Habitación_${id}/${e}`
        })
        setImages(newImages)
        window.scrollTo(0, 0);
    }, [])


    return <>
        <div id='header-title' className='text-center mt-10'>
            <h1 className="text-5xl font-extrabold text-gray-800">Habitacion #{id} </h1>
            <h2 className="mt-5 text-3xl font-extrabold text-gray-800">Fotos de la habitacion</h2>
        </div>

        <div className='flex items-center justify-center'>
            <div id='root-container-carousel' className='mt-5 md:m-10 w-full  xl:w-5/12 lg:w-6/12 2xl:w-7/12'>
                <Carousel className='h-[300px] md:h-[400px] xl:h-[520px] lg:h-[400px] 2xl:h-[600px]' images={images} redirectImage={false} />
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
                <FontAwesomeIcon size='2xs' color='white' icon={faArrowLeft} /> <a href={`/rooms/${type}`}>Regresar </a>
            </button>
        </div>
    </>
}
