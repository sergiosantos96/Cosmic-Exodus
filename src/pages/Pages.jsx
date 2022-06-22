import React from "react";
import { Route, Routes } from "react-router-dom";
import GraphicsPage from "../pages/GraphicsPage";
import ContentPage from "../pages/ContentPage";
import ProfilePage from "../pages/ProfilePage";
import HiringPage from "../pages/HiringPage";
import PrivacyPage from "../pages/PrivacyPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import ContactusPage from "../pages/ContactusPage";
import FAQPage from "../pages/FAQPage";
import HomePage from "../pages/HomePage";
import DisclaimerPage from "../pages/DisclaimerPage";
import HiringDetailsPage from "../pages/HiringDetailsPage";
import NavBar from "../component/navbar/navbar";
import AllPages from "../component/pdfViewer/PDFViewer";
import GiveAwayPage from "./GiveAwayPage";
/* import BlogPage from "./BlogPage";
import Single from "../component/blog/single/single"; */

function Pages() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/whitepaper"
          element={<AllPages pdf={"whitepaper.pdf"} />}
        />
        <Route
          path="/cosmicdeck"
          element={<AllPages pdf={"cosmicdeck.pdf"} />}
        />
        <Route
          path="/tokenomics"
          element={<AllPages pdf={"tokenomics.pdf"} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cosmicpack" element={<GraphicsPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/profiles" element={<ProfilePage />} />
        <Route path="/hiring" element={<HiringPage />} />
        <Route path="/giveaway" element={<GiveAwayPage />} />
        <Route path="/hiring/:position" element={<HiringDetailsPage />} />
        <Route path="/privacypage" element={<PrivacyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        {/*  <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/single" element={<Single />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Pages;
