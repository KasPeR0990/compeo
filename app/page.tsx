"use client";

import { useState } from "react";
import CompanyResearcher from "../components/CompanyResearchHome";
import WebsetPage from "../components/Websets"; // <-- make this component

export default function Home() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <main className="flex relative min-h-screen flex-col items-center justify-start pt-20">
      {/* dotted paper background */}
      <div className="absolute inset-0 -z-0 w-full h-full bg-[radial-gradient(#80808044_1px,transparent_0)] bg-[size:30px_30px]" />

      {/* top toggle */}
      <div className="flex space-x-4 mb-8 z-10">
        <button
          onClick={() => setActiveTab("company")}
          className={`px-4 py-2 rounded-full transition-all font-sans font-normal text-xl ${
            activeTab === "company" ? "underline" : ""
          }`}
        >
          company research
        </button>
        <button
          onClick={() => setActiveTab("people")}
          className={`px-4 py-2 rounded-full transition-all font-sans font-normal text-xl ${
            activeTab === "people" ? "underline" : ""
          }`}
        >
          people websets
        </button>
      </div>

      <div className={activeTab === "company" ? "" : "hidden"}>
        <CompanyResearcher />
      </div>
      <div className={activeTab === "people" ? "" : "hidden"}>
        <WebsetPage />
      </div>
    </main>
  );
}
