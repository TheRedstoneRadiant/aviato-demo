import React from "react";
import AviatoLogo from "./aviatoLogo.component";

export default function NavigationBar() {
  return (
    <nav className="mt-6 flex justify-center">
      <div className="flex bg-white justify-around items-center rounded-2xl p-3 font-semibold text-sm">
        <AviatoLogo />
        <div className="px-8 flex space-x-8 text-gray-950">
          <a href="/">Team</a>
          <a href="/">Blog</a>
        </div>
        <div className="space-x-1.5">
          <a href="/" className="py-2 px-3.5 text-primary-500 font-semibold">
            Sign In
          </a>
          <button className="bg-primary-100 text-white py-2 px-3.5 rounded-lg">
            Request a free trial
          </button>
        </div>
      </div>
    </nav>
  );
}
