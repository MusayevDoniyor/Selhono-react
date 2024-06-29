import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Services from "../pages/services/Services";
import Project from "../pages/project/Project";
import NotFound from "../pages/notFound/NotFound";
import Header from "../components/header/Header";
import Bathroom from "../pages/project/components/Bathroom";
import BedRoom from "../pages/project/components/Bedroom";
import Kitchen from "../pages/project/components/Kitchen";
import LivingArea from "../pages/project/components/LivingArea";

const Page = () => {
  return (
    <div className="w-full mx-auto py-3">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />}>
              <Route
                index
                element={<Navigate to={"bedroom"} replace></Navigate>}
              />
              <Route path="bathroom" element={<Bathroom />} />
              <Route path="bedroom" element={<BedRoom />} />
              <Route path="kitchen" element={<Kitchen />} />
              <Route path="living-area" element={<LivingArea />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default Page;
