import React, { useState, useEffect } from "react";
import NavigationBar from "./components/navigationBar.component";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => {
        setIsLoading(false);
      });
    };
  }, []);

  return (
    <div className="m-0 font-inter">
      {isLoading && (
        <div className="w-screen h-screen flex items-center justify-center opacity-100 transition-opacity duration-500">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 h-16 w-16"></div>
        </div>
      )}

      <div
        className={`w-screen h-screen overflow-x-hidden overflow-y-scroll flex flex-col items-center ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
        style={{
          background:
            "radial-gradient(123.96% 100% at 50.00% -0.00%, rgba(57, 129, 246, 0.15) 35.50%, rgba(255, 255, 255, 0.00) 68.24%, rgba(57, 129, 246, 0.00) 100%)",
        }}
      >
        <NavigationBar />

        <h1 className="text-indigo-950 leading-snug mt-24 max-w-5xl text-8xl font-bold text-center">
          The ultimate search engine for&nbsp;
          <div className="rounded-[20px] rotate-2 text-white bg-primary-200 inline-block px-4 pb-5">
            <span className="inline-block -rotate-2">startups</span>
          </div>
        </h1>

        <img src="assets/Demo.png" alt="Demo" />
        <p className="text-slate-500 font-medium">
          Investors already using Aviato
        </p>
        <img className="my-10" src="assets/Investors.png" alt="Investors" />
      </div>
    </div>
  );
}

export default App;
