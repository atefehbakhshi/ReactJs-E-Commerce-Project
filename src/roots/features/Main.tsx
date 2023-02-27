import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../layouts";

export const MainRoot = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
