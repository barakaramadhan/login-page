import { useContext } from "react";
import UserNameContext from "./UserName";

function ProfileDetail() {
  const { name, setName } = useContext(UserNameContext);

  return (
    <div className="max-w-[320px] mx-auto my-[24px] p-[20px] bg-white text-[#09090b] rounded-[12px] border border-[#e4e4e7] shadow-sm font-sans">
      
      <div className="mb-[20px]">
        <span className="text-[12px] font-medium text-[#71717a] uppercase tracking-wider block mb-[4px]">
          Profil Pengguna
        </span>
        <h2 className="text-[18px] font-semibold text-[#09090b] m-0">
          {name}
        </h2>
      </div>

      <button 
        onClick={() => setName(name === "Ali" ? "Fulan" : "Ali")}
        className="w-full py-[8px] px-[12px] bg-[#18181b] hover:bg-[#27272a] active:bg-[#09090b] text-white text-[13px] font-medium rounded-[6px] transition-colors duration-150 cursor-pointer border-0"
      >
        Ganti Nama ke {name === "Ali" ? "Fulan" : "Ali"}
      </button>

    </div>
  );
}

export default ProfileDetail;