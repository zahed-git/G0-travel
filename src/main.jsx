import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Toaster } from 'react-hot-toast';
import ErrorPage from './component/Error/ErrorPage.jsx';
import Login from './component/Login/Login.jsx';
import AuthProvider from './assets/Provider/AuthProvider.jsx';
import Home from './component/Home/Home.jsx';
import Root from './component/Root/Root.jsx';
import SingUp from './component/SingUp/SingUp.jsx';
import Banner from './component/Banner/Banner.jsx';
import Spots from './component/Spots/Spots.jsx';
import AddSpot from './component/AddSpot/AddSpot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp/>,
      },
      {
        path: "/spots/:country_name",
        element: <Spots/>
      },
      {
        path: "/addspot",
        element: <AddSpot />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,

)
