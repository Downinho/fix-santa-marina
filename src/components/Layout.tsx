import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { BackToTop } from "@/components/BackToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 w-full overflow-x-hidden">
          <Header />
          <main className="flex-1 w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </SidebarProvider>
  );
}