"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import React from "react";
import MenuItems from "./MenuItem";

export default function Hamburger({
  className,
  ...props
}: React.ComponentProps<typeof MenuIcon>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon
          className={`cursor-pointer transition-all duration-300 hover:scale-125 ${className}`}
          {...props}
        />
      </SheetTrigger>
      <SheetContent side="right" className="bg-muted p-4">
        <SheetHeader>
          <SheetTitle className="mb-4 text-center">Shadcn Dashboard</SheetTitle>
        </SheetHeader>
        <MenuItems />
      </SheetContent>
    </Sheet>
  );
}
