import React from "react";
import { Outlet } from "react-router";
import { BackgroundVideo } from "../components/layout/main-layout/BackgroundVideo";
import { Sidebar } from "../components/layout/main-layout/Sidebar";
import { Header } from "../components/layout/main-layout/Header";
import { BackgroundImage } from "../components/layout/main-layout/BackgroundImage";

export default function MainLayout() {
  return (
    <div className="relative flex gap-4 h-screen w-full">
      {/* <BackgroundVideo /> */}
      <BackgroundImage />
      <Sidebar />
      <div className="relative z-10 flex flex-col gap-4 lg:py-9 lg:pr-9 py-4 pr-4 max-lg:px-4 size-full">
        <Header />
        <main className="h-full w-full overflow-auto bg-background rounded-lg p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
