
import React from 'react';

import RootLayout from "./Component/RootLayout/RootLayout";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MyCourse from './Component/MyCourse/MyCourse'
import Results from './Component/Result/Result'
import PurchaseHistory from './Component/PurchaseHistory/PurchaseHistory.jsx'
import Profile from './Component/Profile/Profile.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/my-course" element={<MyCourse/>} />
        <Route path="/results" element={<Results />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/profile" element={<Profile />} />



     
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
