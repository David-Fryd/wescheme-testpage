import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import App from "./src/App";

const rootElt = document.getElementById('root');
const root = createRoot(rootElt)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)