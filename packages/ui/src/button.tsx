"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = () => {
  return (
    <button
      className="bg-gray-900 text-white"
      onClick={() => alert(`Hello from your app!`)}
    >
      Click Me
    </button>
  );
};
