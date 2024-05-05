import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Carousel = ({ className = "h-56 md:h-96", onchangeImage, images, redirectImage = false }) => {
    const [total, setTotal] = useState(0)

    function moveRight() {
        const tmp = total + 1 == images.length ? 0 : total + 1;
        onchangeImage && onchangeImage(tmp)
        setTotal(tmp)
    }

    function moveLeft() {
        const tmp = total - 1 < 0 ? images.length - 1 : total - 1;
        onchangeImage && onchangeImage(tmp)
        setTotal(tmp)
    }

    function moveSpecific(index) {
        onchangeImage && onchangeImage(index)
        setTotal(index)
    }

    const mainClass = "duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 translate-x-0"
    const rightClass = "duration-700 ease-in-out absolute inset-0 transition-transform transform translate-x-full z-20"
    const leftClass = "duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 -translate-x-full z-10"
    const defaultCLass = "duration-700 ease-in-out absolute inset-0 transition-transform transform z-10 translate-x-full z-20 hidden"

    function getImage(i, img) {
        let selectedClass = ""
        if (total == i) {
            selectedClass = mainClass
        } else if (total - 1 == i) {
            selectedClass = leftClass
        } else if (total + 1 == i) {
            selectedClass = rightClass
        } else {
            selectedClass = defaultCLass
        }
        return <>
            <div className={selectedClass} data-carousel-item="">

                {redirectImage && <Link to="1">
                    <img src={img} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </Link>}

                {!redirectImage && <img src={img} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />}

            </div>
        </>

    }

    return <>
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">

            <div className={`relative overflow-hidden rounded-lg ${className}`}>
                {images?.map((img, i) => {
                    return getImage(i, img)
                })}
            </div>

            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images?.map((img, i) => {
                    return <button 
                        onClick={()=>{
                            moveSpecific(i)
                        }}
                        type="button" className={`w-3 h-3 rounded-full ${total == i ? 'bg-gray-800' : 'bg-slate-400'}`} 
                        aria-current="true" aria-label={`Slide ${i}`} data-carousel-slide-to={`${i}`}></button>
                })}
            </div>

            {/* <!-- Slider controls--> */}
            <button onClick={() => { moveLeft() }} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"></path>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => { moveRight() }} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    </>
}
