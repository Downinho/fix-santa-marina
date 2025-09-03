import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppSidebar />
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full overflow-x-hidden pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}