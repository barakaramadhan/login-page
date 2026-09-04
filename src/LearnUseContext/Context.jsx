import { useState } from 'react';
import About from './About';
import AboutContext from './AboutContext';
import Contact from './Contact';
import Testimoni from './Testimoni'; // 1. Import komponen Testimoni

function Context() {
  // 2. Gunakan useState agar setTitle bisa digunakan
  const [title, setTitle] = useState("Tentang website");

  return (
    // 3. Kirim object berisi title dan setTitle ke provider
    <AboutContext.Provider value={{ title, setTitle }}>
      <About />
      <Contact />
      <Testimoni />
    </AboutContext.Provider>
  );
}

export default Context;