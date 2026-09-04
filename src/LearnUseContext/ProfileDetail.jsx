import React from 'react'

// Tangkap 'name' dari props di sini
function ProfileDetail({ name }) {
  return (
    <div>
      <h1>ProfileDetail</h1>
      <p>Name : {name}</p>
    </div>
  )
}

export default ProfileDetail