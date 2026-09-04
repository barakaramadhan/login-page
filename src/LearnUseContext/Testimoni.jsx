import { useContext } from 'react';
import AboutContext from './AboutContext'; // Sesuaikan jika menggunakan default export (tanpa { })

function Testimoni() {
  // Ambil title dan setTitle dari context
  const { title, setTitle } = useContext(AboutContext);

  return (
    <div className="p-4 border rounded-lg my-2">
      <h2>Judul Saat Ini: {title}</h2>
      
      {/* Mengubah nilai title saat tombol diklik */}
      <button 
        onClick={() => setTitle("Judul Berhasil Diubah dari Testimoni!")}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
      >
        Ubah Judul
      </button>
    </div>
  );
}

export default Testimoni;