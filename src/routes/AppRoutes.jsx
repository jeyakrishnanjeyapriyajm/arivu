import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import CoventryPage from "../pages/CoventryPage";
import BirminghamPage from "../pages/BirminghamPage";
import ShirleyPage from "../pages/ShirleyPage";
import ContactPage from "../pages/ContactPage";
import PlaceholderPage from "../pages/PlaceholderPage";
import EventsPage from "../pages/EventsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/coventry" element={<CoventryPage />} />

        <Route path="/birmingham" element={<BirminghamPage />} />

        <Route path="/shirley" element={<ShirleyPage />} />

        <Route path="/events" element={<EventsPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
