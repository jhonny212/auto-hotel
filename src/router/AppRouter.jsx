import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/NavBar'
import { Fotter } from '../components/Fotter'
import { SpeedDial } from '../components/SpeedDial'
import { AllRooms } from '../pages/AllRooms';
import { Home } from '../pages/Home'
import { RoomsByCategory } from '../pages/RoomsByCategory';
import { Room } from '../pages/Room';

export const AppRouter = () => {
    return <>
        <NavBar />
        <div className='flex' style={{
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <Routes>
                <Route path="auto-hotel/rooms" element={<AllRooms />} />
                <Route path="auto-hotel/rooms/:type" element={<RoomsByCategory  />} />
                <Route path="auto-hotel/rooms/:type/:id" element={<Room />} />
                <Route path="auto-hotel" element={<Home />} />
            </Routes>
        </div>

        <SpeedDial />
        <Fotter />
    </>
}