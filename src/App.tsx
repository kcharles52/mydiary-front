
//react libraries
import * as React from "react";

//third party packages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


//components
import AppRoutes from "./routes";

const App =()=>(
  <React.Fragment>
    <ToastContainer />
    <AppRoutes />
  </React.Fragment>
);
export default App;
