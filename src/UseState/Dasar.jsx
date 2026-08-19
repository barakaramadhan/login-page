import React from 'react'

function Dasar() {
    let angka = 0;

    function tambah(){
        angka = angka + 1;
        console.log(angka);
    }
  return (
    <div>
        <button onClick={tambah} className='bg-blue-500 px-3 py-2 text-white'>Tambah</button>
    </div>
  )
}

export default Dasar