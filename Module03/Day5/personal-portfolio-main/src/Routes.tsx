import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./components/ProjectDetails";

import MainLayout from "./components/common/MainLayout";

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
               <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        {/* ✅ ADD THESE */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />

      </Route>
    </Routes>
  );
}