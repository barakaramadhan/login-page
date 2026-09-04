import React, { useState } from 'react'
import { SantriContext } from './Tugas-08/SantriContext';
import Navbar from './Tugas-08/Navbar';
import Profile from './Tugas-08/Profile';

function AppUseContext() {
    const [nama, setNama] = useState("Fulan");
  return (
    <SantriContext.Provider value={{nama, setNama}}>
        <div>
            <Navbar />
            <Profile />
        </div>
    </SantriContext.Provider>
  )
}

export default AppUseContext