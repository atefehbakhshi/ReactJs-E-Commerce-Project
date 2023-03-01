import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../layouts/features/Sidebar";

export const ProductsRoot = () => {
  return (
    <div className="flex gap-4 p-3 w-full">
      <Sidebar />
      <main className="w-[80%]">
        <Outlet />
      </main>
    </div>
  );
};
