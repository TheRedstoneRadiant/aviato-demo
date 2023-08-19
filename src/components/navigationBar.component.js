import React from "react";
import AviatoLogo from "./aviatoLogo.component";

export default function NavigationBar() {
  return (
    <nav className="mt-6 flex justify-center">
      <div className="flex items-center justify-around rounded-2xl bg-white p-3 text-xs font-semibold drop-shadow-md sm:text-sm">
        <AviatoLogo />
        <div className="flex space-x-4 px-4 text-gray-950 sm:space-x-8 sm:px-8">
          <a href="/" target="_blank">
            Team
          </a>
          <a href="/" target="_blank">
            Blog
          </a>
        </div>
        <div className="space-x-1.5">
          <a
            href="https://www.aviato.co/funds/auth/login"
            className="px-2 py-2 font-semibold text-primary-500 sm:px-3.5"
          >
            Sign In
          </a>
          <a href="https://www.aviato.co/sales">
            <button className="rounded-lg bg-primary-100 px-2 py-2 text-white sm:px-3.5 sm:py-2">
              Request a free trial
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
