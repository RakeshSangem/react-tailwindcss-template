import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import TailwindIndicator from "./TailwindIndicator.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="max-w-screen-xl mx-auto">
      <App />
      <TailwindIndicator />
    </main>
  </React.StrictMode>
);
