import React, { useContext } from "react";

import { SantriContext } from "./SantriContext";

export default function Navbar() {

  const { nama } = useContext(SantriContext);

  return (

    <nav className="w-full bg-white px-6 py-4 shadow-md">

      <h2 className="text-xl font-semibold text-gray-800">
        Selamat datang, <span className="text-blue-600">{nama}</span>
      </h2>

    </nav>
  );
}