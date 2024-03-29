import { useState } from "react";
import {
  Route,
  Routes,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Helplayout from "./layouts/helplayout";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contact";
import { contactData } from "./pages/ContactAction";
import NotFound from "./pages/NotFound";
import StationsLayout from "./layouts/StationsLayout";
import Stations, { stationsLoader } from "./pages/Stations";
import StaionsDetails, { stationDeatailsLoader } from "./pages/StaionsDetails";
import StationError from "./pages/StationError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* Help rooute */}
      <Route path="help" element={<Helplayout />}>
        <Route path="FAQ" element={<FAQ />} />
        <Route path="contacts" element={<Contacts />} action={contactData}/>
      </Route>

      {/* staions route */}
      <Route path="stations" element={<StationsLayout />}  errorElement={<StationError/>}>
        <Route index element={<Stations />} loader={stationsLoader} />
        <Route path=":id" 
        element= {<StaionsDetails/>} 
        loader={stationDeatailsLoader}
       
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
