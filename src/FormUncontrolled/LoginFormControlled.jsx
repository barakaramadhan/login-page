import React, { useState } from "react";

function LoginFormControlled() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

 const handlePhoneNumber = (e) => {
  setPhone(e.target.value);
  console.log(e.target.value);
 }


  return (
    <div>
      <form
        className="flex min-h-screen items-center justify-center bg-gray-100"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(username);
          console.log(password);
          console.log(phone);
        }}
      >
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
            Login
          </h2>

          <p className="mb-6 text-center text-gray-500">
            Silakan masuk ke akun kamu
          </p>

          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              Username
            </label>

            <input
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                console.log(event.target.value);
              }}
              type="text"
              name="username"
              placeholder="Masukkan username"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>

            <input
            onChange={(event) =>{
                setPassword(event.target.value);
                console.log(event.target.value);
            }}
              type="password"
              name="password"
              placeholder="Masukkan password"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Phone Number
            </label>

            <input
            onChange={handlePhoneNumber}
              type="phone"
              name="phone"
              value={phone}
              placeholder="Masukkan nomor telepon anda"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

          <h2 className="mt-4 text-center text-xl font-bold">
            {username}
          </h2>
          <h2 className="mt-4 text-center text-xl font-bold">
            {password}
          </h2>
          <h2 className="mt-4 text-center text-xl font-bold">
            {phone}
          </h2>
        </div>
      </form>
    </div>
  );
}

export default LoginFormControlled;