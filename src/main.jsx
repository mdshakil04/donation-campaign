import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Donations from "./components/Donations/Donations";
import Statistics from "./components/Statistics/Statistics";
import DonationDetails from "./components/DonationDetails/DonationDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<Donations></Donations>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/category/:id",
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch('data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
);
