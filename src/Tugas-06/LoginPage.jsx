import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl bg-[#121118] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
        
    
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl pointer-events-none"></div>

       
        <div className="font-bold text-lg tracking-wide text-white mb-8">
          ABU DZAR
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
       
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 tracking-wider mb-6">
              ADZ LOGIN
            </h1>

            <div className="space-y-1 text-gray-400">
              <p className="text-base font-normal">Hey welcome back!</p>
              <p className="text-base font-normal">
                Enter your details below to sign in to your account
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="flex items-center space-x-3 px-6 py-3 border border-gray-600 rounded-full hover:bg-white/5 transition duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                <span className="text-sm text-gray-300 font-medium">
                  Login with google
                </span>
              </button>
            </div>

            <p className="text-sm text-gray-400 pt-6">
              Not yet a member?{" "}
              <span className="text-white font-bold text-base hover:underline ml-1 cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>

          
          <div className="relative">
            <form
              className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-3xl p-8 space-y-6 shadow-2xl"
              onSubmit={handleSubmit}
            >
             
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="masukan username anda"
                  className="w-full px-5 py-3.5 bg-white/10 rounded-full text-sm text-white placeholder-gray-400 border border-transparent focus:border-purple-400/50 focus:outline-none transition"
                />
                <small className="text-white/30 text-xs block">
                  Username anda adalah : {username}
                </small>
              </div>

             
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="masukan password anda"
                  className="w-full px-5 py-3.5 bg-white/10 rounded-full text-sm text-white placeholder-gray-400 border border-transparent focus:border-purple-400/50 focus:outline-none transition"
                />
                <small className="text-white/30 text-xs block">
                  Password anda adalah : {password}
                </small>
              </div>

             
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#8b85c1] hover:bg-[#7a73b5] text-black font-semibold text-sm rounded-full transition duration-200 tracking-wide cursor-pointer"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </section>

       
        <footer className="text-center text-xs text-gray-400 font-medium flex items-center justify-center space-x-1">
          <span className="text-sm">&copy;</span>
          <span>Copyright baraka ramadhan</span>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;