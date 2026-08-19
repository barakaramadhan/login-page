import {useState} from "react"
import React from 'react'

function Praktik() {
    const [nilai, setNilai] = useState(0)


    function Tambah(){
        setNilai(nilai + 1);
    }
    function Tambah2(){
        setNilai(nilai + 2);
    }
    
  return (
    <>
        <h1>Nilai : {nilai}</h1>

        <button onClick={Tambah}>Tambah 1</button> 
        <br />   
        <button onClick={Tambah2}>Tambah 2</button> 
        <br />   
        <button onClick={() => setNilai(nilai + 3)}>Tambah 3</button> 
    </>
  )
}

export default Praktik