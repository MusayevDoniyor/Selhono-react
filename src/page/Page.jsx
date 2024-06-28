import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Services from "../pages/services/Services";
import Project from "../pages/project/Project";
import NotFound from "../pages/notFound/NotFound";
import Header from "../components/header/Header";

const Page = () => {
  return (
    <>
      <div className="w-full mx-auto py-3">
        <Router>
          <Header></Header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/project" element={<Project />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
};

export default Page;
