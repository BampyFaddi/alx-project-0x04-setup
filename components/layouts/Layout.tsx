import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interfaces"; // ✅ Import from central interfaces

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
