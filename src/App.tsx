import routes from "@common/routes";
import { generateRoute } from "@common/routes/generate-routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        {routes.map((route) => generateRoute(route))}
        <Route path="*" element={<p>PAGE NOT FOUND</p>} />
      </Routes>
    </div>
  );
}

export default App;
