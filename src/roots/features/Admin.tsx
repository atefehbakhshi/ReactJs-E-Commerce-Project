import { Outlet } from "react-router-dom";
import { AdminHeader } from "../../layouts";

export const AdminRoot = () => {
  return (
    <>
      <AdminHeader/>
      <main>
        <Outlet />
      </main>
    </>
  );
};
