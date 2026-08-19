import React, { useState } from "react";

function MenyimpanData() {
  const [angka, setAngka] = useState(0);

  function Tambah() {
    console.log(angka + 1);
    setAngka(angka + 1);
  }
  return (
    <div>
      <h1>{angka}</h1>
      <button onClick={Tambah}>Tambah</button>
    </div>
  );
}

export default MenyimpanData;
