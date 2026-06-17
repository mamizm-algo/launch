import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Klaro cookie consent
import * as Klaro from "klaro";
import "klaro/dist/klaro.css";
import { klaroConfig } from "./lib/klaro-config";

// Expose Klaro on window so other code (e.g., footer "Cookie settings" link,
// route-tracker consent guard) can interact with it.
// Skip entirely on localhost — no analytics data should be collected in dev.
const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
if (!isLocalhost) {
  (window as any).klaro = Klaro;
  (window as any).klaroConfig = klaroConfig;
  Klaro.setup(klaroConfig as any);
}

createRoot(document.getElementById("root")!).render(<App />);
