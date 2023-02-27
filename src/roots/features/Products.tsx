import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../layouts/features/Sidebar";

export const ProductsRoot = () => {
  const [menu, setMenu] = useState("none");
  const [menuIcon, setMenuIcon] = useState("block");
  const [isMobile, setIsMobile] = useState(true);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (isMobile) {
      setMenu("none");
      setMenuIcon("block");
    } else {
      setMenu("block");
      setMenuIcon("none");
    }
  }, [isMobile]);

  const show = () => {
    setMenu("block");
    setMenuIcon("none");
  };
  const hide = () => {
    setMenu("none");
    setMenuIcon("block");
  };

  return (
    <div className="flex gap-8">
      <Sidebar className="hidden" hide={hide} menu={menu} />
      <span onClick={show} className="block" style={{ display: menuIcon }}>
        ?
      </span>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
