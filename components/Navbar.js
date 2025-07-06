"use client";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";

function Navbar() {
  const { toggleTheme, isRagOn } = useTheme();
  return (
    <nav className="w-full flex justify-between py-4 px-2">
      <p className="font-mono text-accent text-2xl font-semibold tracking-wide [text-shadow:1px_1px_0_rgb(255_255_255/_0.3)]">
        SmartRecco
      </p>
      <button
        className="bg-text-secondary text-secondary text-lg font-semibold tracking-wider px-4 py-1 rounded-full shadow-lg border border-white/50 cursor-pointer font-poppins"
        onClick={toggleTheme}
      >
        RAG:{" "}
        <span
          className={`${
            isRagOn
              ? "text-accent/60 [text-shadow:_0_0_3px_#f6339a]"
              : "text-white/60 [text-shadow:_0_0_3px_#fff]"
          }`}
        >
          {isRagOn ? "ON" : "OFF"}
        </span>
      </button>
      <button className="bg-primary text-text-secondary text-lg px-4 py-1 rounded-full cursor-pointer font-medium shadow-sm font-poppins">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
