import { Routes, Route } from "react-router-dom";
import CheckBackLater from "./CheckBackLater";
import AppLayout from "./AppLayout"; // Wraps main app content

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/check-back-later" element={<CheckBackLater />} />
    </Routes>
  );
};

export default AppRoutes;
