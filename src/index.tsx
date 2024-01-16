import React from "react";
import ReactDOMClient from "react-dom/client";
import { SikomobilityComBy } from "./SikomobilityComBy";
import { Provider } from "react-redux";
import store from "./store";
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
    <Provider store={store}>
        <SikomobilityComBy />
    </Provider>
);