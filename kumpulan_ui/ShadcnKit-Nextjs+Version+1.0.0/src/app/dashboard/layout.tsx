import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AppContextProvider } from "@/context/app-context";
import MobileSidebar from "@/components/layouts/dashboard/mobile-sidebar";
import DesktopSidebar from "@/components/layouts/dashboard/desktop-sidebar";
import DashboardNavbar from "@/components/layouts/dashboard/dashboard-navbar";
import Footer from "@/components/layouts/dashboard/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppContextProvider>
      <div className="flex h-screen text-start">
        <DesktopSidebar />
        <MobileSidebar />

        <div className="w-full">
          <div className="max-w-[1200px] w-full mx-auto">
            <DashboardNavbar className="p-6 pb-0" />
          </div>

          <ScrollArea className="h-[calc(100vh-102px)]">
            <div className="max-w-[1200px] w-full mx-auto p-6">
              {children}

              <Footer className="mt-7" />
            </div>
          </ScrollArea>
        </div>
      </div>
    </AppContextProvider>
  );
};

export default Layout;
