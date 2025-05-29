import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContactUsPage } from "./screens/ContactUsPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ContactUsPage />
  </StrictMode>,
);
