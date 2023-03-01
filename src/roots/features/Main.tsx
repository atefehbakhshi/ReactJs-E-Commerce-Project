import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../layouts";

export const MainRoot = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] sm:min-h-[90vh] ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
