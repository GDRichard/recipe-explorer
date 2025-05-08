import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-2">
      <Outlet />
    </div>
  );
}
