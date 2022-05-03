import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import NotFound from "./Layout/NotFound";
import Sectores from "./Sectores/Sectores";
import Administracion from "./Administracion/Administracion";
import Vias from "./Vias/Vias";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Sectores /> },
        { path: "vias", element: <Vias /> },
        { path: "admin", element: <Administracion /> },
      ],
    },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Routes;
