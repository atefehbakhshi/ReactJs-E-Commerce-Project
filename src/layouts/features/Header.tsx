import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex gap-3">
      <p>basket</p>
      <Link to="/admin">admin link</Link>
    </div>
  );
};
