import routes from "@common/routes";
import { generateRoute } from "@common/routes/generate-routes";
import { PATHS } from "@common/routes/paths";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        {routes.map((route) => generateRoute(route))}
        <Route path="*" element={<Navigate to={PATHS.protected.home} />} />
      </Routes>
    </div>
  );
}

export default App;
