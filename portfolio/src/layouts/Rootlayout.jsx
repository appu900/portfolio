import React from "react";
import Sidebar from "./sidebar/Sidebar";

export default function Rootlayout({ children }) {
  return (
    <div className="md:flex md:gap-4  ">
      <div className="sticky z-[999] left-0 top-0 bottom-0 md:h-screen">
        <Sidebar />
      </div>
      <main className="max-w-8xl flex-1 z-[999] mx-auto py-4 overflow-hidden md:px-6">
        {children}
      </main>
    </div>
  );
}
