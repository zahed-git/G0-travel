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
import Detail from './component/Detail/Detail.jsx';
import Update from './component/Update/Update.jsx';
import Contact from './component/Contact/Contact.jsx';
import Private from './assets/PrivateRout/Private.jsx';
import Mylist from './component/Mylist/Mylist.jsx';
import User from './component/User/User.jsx';
import UserSettings from './component/UserSettings/UserSettings.jsx';
import Allspots from './component/Allspots/Allspots.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/allspots",
        element: <Allspots />
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
        path: "/addspot",
        element: <Private><AddSpot /></Private> 
      },
      {
        path: "/mylist",
        element: <Private><Mylist /></Private> 
      },
      {
        path: "/user",
        element: <Private><User /></Private> 
      },
      {
        path: "/usersettings",
        element: <Private><UserSettings /></Private> 
      },
      {
        path: "/detail/:_id",
        element: <Detail />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/update/:_id",
        element: <Update />,
        loader: ({params})=> fetch(`http://localhost:5000/places/${params._id}`)
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
