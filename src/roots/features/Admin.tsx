import { Link, Outlet } from "react-router-dom";

export const AdminRoot = () => {
  return (
    <>
      <Link to="/">back</Link>
      <main>
        <Outlet />
      </main>
    </>
  );
};
