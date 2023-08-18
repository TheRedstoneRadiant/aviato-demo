import React from "react";
import AviatoLogo from "./aviatoLogo.component";

export default function NavigationBar() {
  const InconspicuousURL = atob(
    "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==",
  );

  return (
    <nav className="mt-6 flex justify-center">
      <div className="flex items-center justify-around rounded-2xl bg-white p-3 text-sm font-semibold">
        <AviatoLogo />
        <div className="flex space-x-8 px-8 text-gray-950">
          <a href={InconspicuousURL}>Team</a>
          <a href={InconspicuousURL}>Blog</a>
        </div>
        <div className="space-x-1.5">
          <a
            href={InconspicuousURL}
            className="px-3.5 py-2 font-semibold text-primary-500"
          >
            Sign In
          </a>
          <button className="rounded-lg bg-primary-100 px-3.5 py-2 text-white">
            Request a free trial
          </button>
        </div>
      </div>
    </nav>
  );
}
