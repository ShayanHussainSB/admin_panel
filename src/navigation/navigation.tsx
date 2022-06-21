import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Home from "../pages/home";
import MerchDetails from "../pages/merch";
import MerchForm from "../pages/merch/form";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merch_details" element={<MerchDetails />} />
      <Route path="/create_merch" element={<MerchForm />} />
      <Route path="/orders" element={<MerchDetails />} />
    </Routes>
  );
}
