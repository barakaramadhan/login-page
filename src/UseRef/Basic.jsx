import React, {useRef} from "react";

function Basic() {
    const inputRef = useRef();

    function fokusInput(){
        inputRef.current.focus()
    }
  return(
    <>
      <input ref={inputRef} className="border-2 border-black"/>
      <button onClick={fokusInput}>menyuruh fokus ke input</button>  
    </>
  )
}

export default Basic;

// useRef digunakan untuk menyimpan sebuah nilai atau mendapatkan referensi
//  langsung ke elemen DOM tanpa menyebabkan Component melakukan render
//  ulang ketika nilainya berubah
