"use client";

import MenuItems from "./MenuItem";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SideBar() {
  return (
    <div className="bg-muted hidden flex-col overflow-auto p-4 sm:flex">
      <h4 className="text-center">Shadcn Dashboard</h4>

      <MenuItems />
      <div className="">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-primary">CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
