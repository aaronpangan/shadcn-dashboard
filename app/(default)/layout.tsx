import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen gap-4 flex-col items-center justify-center">
      {children}
    </div>
  );
}
