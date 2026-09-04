import React, { useContext } from 'react'
import { SantriContext } from './SantriContext'
function Profile() {
    const {nama} = useContext(SantriContext);
  return (
    <>
        <div>
            <p>Nama Santri : {nama}</p>
        </div>
     </>
  )
}

export default Profile