import { useState } from "react";
import ProfileDetail from "./ProfileDetail";
import UserNameContext from "./UserName";

function Home() {
  // Gunakan 'const', bukan 'useState' di depan
  const [name, setName] = useState("Fulan");

  return (
    <div>
      <h1>Home</h1>
      <UserNameContext.Provider value={{ name, setName }}>
        <ProfileDetail />
      </UserNameContext.Provider>
    </div>
  );
}

export default Home;