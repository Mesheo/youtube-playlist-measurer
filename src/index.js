import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'

import Components from "./App";
const { Header, Footer } = Components

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <Header />
        <Footer />
    </StrictMode>
)