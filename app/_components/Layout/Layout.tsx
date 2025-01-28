import { ReactNode } from "react";
import { Navigationbar } from "./Navigationbar";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={`sticky top-0 w-full h-header bg-background z-navbar`}>
        <Navigationbar />
      </header>

      <main className="w-full">{children}</main>
    </>
  );
}

export default Layout;
