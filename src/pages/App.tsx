import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import Sidebar from "../components/sidebar";
import Navigation from "../navigation/navigation";
import Header from "../components/header";

// STYLING
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../assets/scss/global.scss";
import "../assets/scss/style.scss";

function App() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Sidebar sidebar={sidebar} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header sidebar={sidebar} setSidebar={setSidebar} />

          <div className="container-fluid">
            <Navigation />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
