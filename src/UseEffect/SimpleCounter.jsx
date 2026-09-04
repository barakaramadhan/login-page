import { useEffect, useState } from "react";
function SimpleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {

   setTimeout(() => {
       console.log('Nungguin yaa');
   }, 5000)
  
    // cleanup function (opsional)
    return () => {
        clearTimeout();
    }
  }, [count]);
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          Count : {count}
        </h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            -1
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600 active:scale-95"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleCounter;