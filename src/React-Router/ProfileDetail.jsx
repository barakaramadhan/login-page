import React from "react";
import { useParams } from "react-router";

const santri = {
    1: "Ahmad",
    2: "Ali",
    3: "Umar",
  
}

function ProfileDetail() {
  //mengambi parameter id dari url
  const { id } = useParams();
  console.log(santri);

  //mengambil data santri berdasarkan ID
  const name = santri[id];
  return (
    <>
      <div>ProfileDetail</div>
      <p>ID : {id}</p>
      <p>Name : {name}</p>
    </>
  );
}

export default ProfileDetail;
