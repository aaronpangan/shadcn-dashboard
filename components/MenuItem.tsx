"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items array with route and label
const navigationItems = [
  {
    url: "/dashboard",
    label: "Dashboard",
  },
  {
    url: "/settings",
    label: "Settings",
  },
  {
    url: "/profile",
    label: "Profile",
  },
  {
    url: "/logout",
    label: "Logout",
  },
];

export default function MenuItems() {
  const pathname = usePathname();

  return (
    <>
      <ul className="mt-4 grow">
        {navigationItems.map((item) => {
          return (
            <li
              key={item.url}
              className={`text-foreground rounded-md p-2 ${pathname === item.url ? "bg-primary text-primary-foreground" : "hover:bg-primary/20"}`}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
