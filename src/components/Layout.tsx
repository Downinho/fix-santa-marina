import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export function Layout({ children, showSidebar = true }: LayoutProps) {
  if (!showSidebar) {
    return (
      <>
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      {/* Global Header with Sidebar Trigger */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <SidebarTrigger className="mr-2" />
          <div className="flex-1">
            <Header />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </>
  );
}