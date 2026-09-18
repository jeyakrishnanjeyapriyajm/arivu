import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppButton from "../common/WhatsAppButton";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
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
