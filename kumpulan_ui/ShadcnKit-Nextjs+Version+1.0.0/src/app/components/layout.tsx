import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AppContextProvider } from "@/context/app-context";
import Navbar from "@/components/layouts/component/navbar";
import SidebarMobile from "@/components/layouts/component/sidebar-mobile";
import SidebarDesktop from "@/components/layouts/component/sidebar-desktop";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppContextProvider>
      <div className="flex h-screen text-start">
        <SidebarDesktop />
        <SidebarMobile />

        <div className="w-full">
          <Navbar />

          <ScrollArea className="h-[calc(100vh-66px)]">
            <div className="max-w-[1200px] w-full mx-auto p-6">{children}</div>
          </ScrollArea>
        </div>
      </div>
    </AppContextProvider>
  );
};

export default Layout;
