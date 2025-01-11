import React from "react";
import { Outlet } from "react-router";
import { BackgroundVideo } from "../components/layout/main-layout/BackgroundVideo";
import { Sidebar } from "../components/layout/main-layout/Sidebar";

export default function MainLayout() {
  return (
    <div className="relative flex gap-4 h-screen max-w-[1440px] w-full">
      <BackgroundVideo />
      <Sidebar />
      <div className="relative z-10 py-9 pr-9 size-full">
        <main className="size-full overflow-auto bg-background rounded-lg p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
