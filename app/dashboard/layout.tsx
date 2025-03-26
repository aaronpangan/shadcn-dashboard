import Hamburger from "../../components/Hamburger";
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

      <div className="relative overflow-auto p-4">
        <Hamburger
          height={35}
          width={35}
          className="absolute top-6 right-6 sm:hidden"
        />

        <h4 className="block sm:hidden">Shadcn Dashboard</h4>

        {children}
      </div>
    </div>
  );
}
