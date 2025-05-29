import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TermsOfUse } from "./screens/TermsOfUse";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TermsOfUse />
  </StrictMode>,
);
