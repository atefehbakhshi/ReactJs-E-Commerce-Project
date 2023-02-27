import React from "react";

export const Sidebar = ({ hide, menu }) => {
  return (
    <div>
      <ul className="hidden" style={{ display: menu }}>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li onClick={hide}>rrrrrrrrrrr2</li>
      </ul>
    </div>
  );
};
