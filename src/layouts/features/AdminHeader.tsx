import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { AdminLink } from "../../components/links";

export const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center p-3 shadow sticky top-0 z-50 md:px-8">
      <div className="flex gap-2">
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
