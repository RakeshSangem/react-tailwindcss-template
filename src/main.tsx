import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App.tsx";
// import Text from "./Text.tsx";
// import Tiptap from "./TipTap.tsx";
import ResponsiveGrid from "./ResponsiveGrid.tsx";
import "./index.css";
import TailwindIndicator from "./TailwindIndicator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="max-w-screen-xl mx-auto">
      <ResponsiveGrid />
      <TailwindIndicator />
    </main>

    {/* 
    <Text />
    <Tiptap /> */}
  </React.StrictMode>
);
