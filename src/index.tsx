import React from "react";
import ReactDOMClient from "react-dom/client";
import { SikomobilityComBy } from "./SikomobilityComBy";


const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SikomobilityComBy />);
