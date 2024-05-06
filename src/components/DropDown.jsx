import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const DropDown = () => {
    const [active, setActive] = useState(false)

    return <>
        <div className="dropdown grid grid-cols-3 bg-gray-100 shadow-2xl" onClick={() => { setActive(!active) }}>
            <span className='cursor-pointer'>
                <FontAwesomeIcon size='2x' color='black' icon={active ? faClose : faBars} />
            </span>
            <div className={`dropdown-content w-[200px] md:w-[500px] text-start`} style={{
                display: `${active ? 'block' : 'none'}`,
            }}>
                <p className='border-b-2 pt-5 pb-2'>
                    <Link to="/">
                        INICIO
                    </Link>
                </p>

                <p className='border-b-2 pt-5 pb-2'>
                    <a href="/#section-rooms" className='cursor-pointer'>
                        HABITACIONES
                    </a>
                </p>

                <p className='border-b-2 pt-5 pb-2'>
                    <a href="#social-contact">
                        CONTACTO
                    </a>
                </p>

            </div>
        </div>
    </>
}
