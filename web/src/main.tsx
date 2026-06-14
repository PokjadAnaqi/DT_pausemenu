import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import App from "./App";
import { isEnvBrowser } from "./utils/misc";
import { debugData } from "./utils/debugData";
import { theme } from "./theme";
import { MantineProvider } from "@mantine/core";

debugData([
  {
    action: "setVisible",
    data: "show-ui",
  },
]);

if (isEnvBrowser()) {
  const root = document.getElementById("root");
  root!.style.backgroundColor = "#3f3f3fbd";
}

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <MantineProvider theme={{ ...theme }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);