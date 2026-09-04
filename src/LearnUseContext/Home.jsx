import React, { useState } from 'react'
import Profile from './Profile'


function Home() {
    const [nama, setNama] = useState("fulan")
  return (
    <>
        <div>
            <h1>Ini adalah halaman home</h1>
            <p>Nama : {nama}</p>
            <button onClick={() => setNama("ali")}>Update</button>
            <Profile name={nama} />
        </div>

        
    </>
  )
}

export default Home