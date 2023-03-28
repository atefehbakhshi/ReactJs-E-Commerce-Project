import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeader } from "../../layouts";
import { getAuthToken } from "../../utile/auth";

export const AdminRoot = () => {
  const navigate = useNavigate();
  const token = getAuthToken();

  useEffect(() => {
    if (token) {
      navigate("/admin");
    } else {
      navigate("/admin/login");
    }
  }, [token]);

  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};
