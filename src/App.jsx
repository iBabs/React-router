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
import NotFound from "./pages/NotFound";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/> }>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path ="help" element={<Helplayout/>}>
        <Route path="FAQ" element={<FAQ/>}/>
        <Route path="contacts" element={<Contacts/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
