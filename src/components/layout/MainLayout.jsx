import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppButton from "../common/WhatsAppButton";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
