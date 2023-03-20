import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { AdminLink } from "../../components/links";

export const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center p-3 shadow sticky top-0 z-50 md:px-8">
      <div className="flex gap-2">
        <div className="border-l border-[#afafaf50] pl-2">
          <NavLink
            to={`/admin`}
            className={({ isActive }) =>
              isActive ? "text-[#41c1c6]" : "text-[#525252]"
            }
            end
          >
            <Icon icon="material-symbols:bar-chart-rounded" width="22" />
          </NavLink>
        </div>
        <AdminLink path="all-products" text="محصولات" />
        <div className="border-x border-[#afafaf50] px-2">
          <AdminLink path="price-quantity" text="موجودی" />
        </div>
        <AdminLink path="orders" text="سفارشات" />
      </div>
      <Link to="/">
        <Icon
          icon="material-symbols:arrow-back-ios-new"
          width="18"
          color="#525252"
        />
      </Link>
    </header>
  );
};
