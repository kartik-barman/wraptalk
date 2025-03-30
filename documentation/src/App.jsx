import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Layout from "./applayout/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="getstarted" element={<GetStarted />} />
      <Route path="how-it-works" element={<HowItWorks />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
