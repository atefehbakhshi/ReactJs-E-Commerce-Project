export const Button = ({ children, bg = "", hover = "hover:bg-gray-200" }) => {
  return (
    <button
      className={`${bg} border rounded px-2 py-1 cursor-pointer ${hover}`}
    >
      {children}
    </button>
  );
};
