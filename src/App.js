import React, { useState } from "react";
import NavigationBar from "./components/navigationBar.component";
import PreLoader from "./components/preloader.component";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="m-0 font-inter">
      {isLoading && <PreLoader setIsLoading={setIsLoading} />}

      <div
        className={`flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-scroll ${
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

        <h1 className="mt-24 max-w-5xl text-center text-[32px] font-bold leading-snug text-indigo-950 md:text-[72px] lg:text-[84px]">
          The ultimate search
          <br />
          engine for&nbsp;
          <div className="inline-block rotate-2 rounded-[20px] bg-primary-200 px-4 pb-5 text-white">
            <span className="inline-block -rotate-2">startups</span>
          </div>
        </h1>

        <img className="w-full" src="assets/Demo.png" alt="Demo" />
        <p className="font-medium text-slate-500">
          Investors already using Aviato
        </p>
        <img
          className="my-10 w-3/4"
          src="assets/Investors.png"
          alt="Investors"
        />
      </div>
    </div>
  );
}

export default App;
