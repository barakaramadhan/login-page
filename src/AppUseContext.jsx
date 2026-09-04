import React, { useState } from 'react'
import { SantriContext } from './Tugas-09/SantriContext';
import Navbar from './Tugas-09/Navbar';
import Profile from './Tugas-09/Profile';

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