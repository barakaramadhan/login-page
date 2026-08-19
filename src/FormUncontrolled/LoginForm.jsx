import React from "react";

function LoginForm() {
  const handlerSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.username.value); //untuk menampilkan username pada console
    console.log(event.target.password.value);
  };

  return (
    <>
      <form
        className="flex min-h-screen items-center justify-center bg-gray-100"
        onSubmit={handlerSubmit}
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
              type="password"
              name="password"
              placeholder="Masukkan password"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
// ini adalah formUncontrolled component
// uncontrolled artinya tidak terkontrol oleh react 