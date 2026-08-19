import {useState} from "react"
import React from "react";


function PraktikTwo() {
    const [nama, setNama] = useState("Ali")
  return (
    <>
      <div>{nama}</div>
      <button onClick={() => setNama("fulan")}>Change Name</button>
    </>
  );
}

export default PraktikTwo;
