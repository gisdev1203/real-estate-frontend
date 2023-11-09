import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatProvider from "./components/sections/Context/ChatProvider";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";

// CA
import "../node_modules/animate.css/animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/magnific-popup/dist/magnific-popup.css";
import "../node_modules/leaflet/dist/leaflet.css";
import "./assets/fonts/flaticon/flaticon.css";
import "./assets/fonts/font-awesome/css/all.min.css";

import "./index.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const root = ReactDOM.createRoot(document.getElementById("acres"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    {userInfo ? (
      <ChatProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ChatProvider>
    ) : (
      <App />
    )}
  </BrowserRouter>
);

reportWebVitals();
