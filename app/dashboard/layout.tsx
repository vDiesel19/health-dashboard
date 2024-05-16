import SideNav from "../ui/dashboard/sidenav";


export default function DashboardLayout({ children}: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}