import React from 'react'
import ProfileDetail from './ProfileDetail'

// Terima props 'nama' di sini
function Profile({ nama }) {
  return (
    <>
      <h1>Profile</h1>
      <ProfileDetail name={nama} />
    </>
  )
}

export default Profile