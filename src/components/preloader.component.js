import React, { useEffect } from "react";

export default function Preloader({ setIsLoading }) {
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, [setIsLoading]);

  return (
    <div className="w-screen h-screen flex items-center justify-center opacity-100 transition-opacity duration-500">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 h-16 w-16"></div>
    </div>
  );
}