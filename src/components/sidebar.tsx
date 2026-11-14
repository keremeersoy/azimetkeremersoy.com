import React from "react";
import MenuContent from "./menu-content";

const Sidebar = () => {
  return (
    <MenuContent className="hidden h-full w-64 shrink-0 flex-col border-r bg-background p-4 lg:flex" />
  );
};

export default Sidebar;
