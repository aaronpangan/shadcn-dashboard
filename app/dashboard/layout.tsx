import SideBar from "../../components/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="grid h-screen grid-cols-1 sm:grid-cols-[250px_1fr]">
      {/* Side Bar */}
      <SideBar />
      {/* Main Page */}

      <div className="overflow-auto p-4">
        <h4 className="block sm:hidden">Shadcn Dashboard</h4>

        <h1>Hello World</h1>

        {children}
      </div>
    </div>
  );
}
