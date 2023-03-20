import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { SidebarLink } from "../../components/links";

const sidebarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  padding: "2rem",
  position: "absolute",
  right: "0",
  top: "0",
  color: "#f7f7f7",
  width: "100%",
  height: "100vh",
  backgroundColor: "#181818d9",
};

export const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [menu, setMenu] = useState({ display: "none" });
  const [menuIcon, setMenuIcon] = useState("block");

  //handle the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    // when first time the page loaded
    handleResize();
    // by changing size of screen
    window.addEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setMenu({ display: "none" });
      setMenuIcon("block");
    } else {
      setMenu({ display: "block" });
      setMenuIcon("none");
    }
  }, [isMobile]);

  const show = () => {
    setMenu(sidebarStyle);
    setMenuIcon("none");
  };

  const hide = () => {
    // if click on the link it jumpes to current page and hide the sidebar
    if (isMobile) {
      setMenu({ display: "none" });
      setMenuIcon("block");
    }
  };

  return (
    <div>
      <div className="hidden z-[55]" style={menu}>
        <ul className="pr-3 py-8 md:border-l">
          <SidebarLink
            mainPath="/watch"
            firstSubPath="/women"
            secondSubPath="/men"
            mainText="ساعت"
            firstText="زنانه"
            secondText="مردانه"
            menuHandler={hide}
          />
          <SidebarLink
            mainPath="/glasses"
            firstSubPath="/women"
            secondSubPath="/men"
            mainText="عینک"
            firstText="زنانه"
            secondText="مردانه"
            menuHandler={hide}
          />
          <SidebarLink
            mainPath="/shoes"
            firstSubPath="/women"
            secondSubPath="/men"
            mainText="کفش"
            firstText="زنانه"
            secondText="مردانه"
            menuHandler={hide}
          />
          <SidebarLink
            mainPath="/clothes"
            firstSubPath="/women"
            secondSubPath="/men"
            mainText="لباس"
            firstText="زنانه"
            secondText="مردانه"
            menuHandler={hide}
          />
          <SidebarLink
            mainPath="/perfume"
            firstSubPath="/women"
            secondSubPath="/men"
            mainText="عطر و ادکلن"
            firstText="زنانه"
            secondText="مردانه"
            menuHandler={hide}
          />
          <SidebarLink
            mainPath="/jewellery"
            firstSubPath="/necklace"
            secondSubPath="/bracelet"
            mainText="جواهرات"
            firstText="گردنبند"
            secondText="دستبند"
            menuHandler={hide}
          />
        </ul>
        <button
          onClick={hide}
          className="bg-[#dfdfdf] rounded-[50%] text-center p-1 md:hidden"
        >
          <Icon
            icon="material-symbols:arrow-forward-ios-sharp"
            width="18"
            color="#525252"
          />
        </button>
      </div>

      <button
        onClick={show}
        className="bg-[#dfdfdf] rounded-[50%] p-1"
        style={{ display: menuIcon }}
      >
        <Icon
          icon="material-symbols:arrow-back-ios-new"
          width="18"
          color="#525252"
        />
      </button>
    </div>
  );
};
