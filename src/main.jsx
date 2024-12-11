import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Authprovider from "./providers/Authprovider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </div>
  </StrictMode>
);
