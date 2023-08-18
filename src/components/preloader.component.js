import React, { useEffect } from "react";

export default function Preloader({ setIsLoading }) {
  useEffect(() => {
    // Hide preloader once window is fully loaded
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, [setIsLoading]);

  return (
    <div
      className="flex h-screen w-screen items-center justify-center opacity-100 transition-opacity duration-500"
      data-testid="preloader"
    >
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50"></div>
    </div>
  );
}
