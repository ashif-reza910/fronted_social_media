// import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/login/Login";
import "../src/style.scss";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Register from "./Pages/register/Register";
import Navbar from "./Components/navbar/Navbar";
import Rightbar from "./Components/rightbar/Rightbar";
import Leftbar from "./Components/leftbar/Leftbar";
import Home from "../src/Pages/home/Home";
import Profile from "../src/Pages/profile/Profile";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);
  // console.log(darkMode);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login " />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <div className="app">
        {/* <div className="blur" style={{ top: "14%", right: "0" }}></div>
        <div className="blur" style={{ top: "60%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div> */}

        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
