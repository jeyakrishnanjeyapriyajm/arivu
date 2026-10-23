import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SchoolsPage from "../pages/SchoolsPage";
import SchoolPage from "../pages/SchoolPage";
import LearningPage from "../pages/LearningPage";
import TeachersPage from "../pages/TeachersPage";
import EventsPage from "../pages/EventsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import { locations } from "../data/locations";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schools" element={<SchoolsPage />} />

        {locations.map((location) => (
          <Route
            key={location.id}
            path={location.path}
            element={<SchoolPage key={location.id} id={location.id} />}
          />
        ))}

        {/* Old arivufoundation.com URLs */}
        {locations.map((location) => (
          <Route
            key={`${location.id}-legacy`}
            path={`/${location.id}-classes`}
            element={<Navigate to={location.path} replace />}
          />
        ))}

        <Route path="/learning" element={<LearningPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
