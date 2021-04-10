import React, { useContext } from "react";
import Head from "next/head";
import dashboard from "../pages/dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import authContext from "../context/auth/authContext";

const LayoutHome = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { usuario, mensaje, autenticado, iniciarSesion } = AuthContext;
  const usuarioR = usuario;

  return (
    <>
      <Head>
        <title>Fundation (full name)</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{ backgroundColor: "#086972" }}
        className="shadow-2xl items-center justify-between flex bg-opacity-90 px-12 py-2 mx-auto shadow-2xl"
      >
        {/* Brand name and logo */}
        <div className="text-2xl text-yellow-600 font-semibold inline-flex items-center">

          <span className="text-white">Dashboard</span>
        </div>
        {/* Username and profile image */}
        <div>
          <ul className="flex text-white">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1LjUzMnB4IiBoZWlnaHQ9IjQ1LjUzMnB4IiB2aWV3Qm94PSIwIDAgNDUuNTMyIDQ1LjUzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuNTMyIDQ1LjUzMjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyLjc2NiwwLjAwMUMxMC4xOTQsMC4wMDEsMCwxMC4xOTMsMCwyMi43NjZzMTAuMTkzLDIyLjc2NSwyMi43NjYsMjIuNzY1YzEyLjU3NCwwLDIyLjc2Ni0xMC4xOTIsMjIuNzY2LTIyLjc2NQ0KCQlTMzUuMzQsMC4wMDEsMjIuNzY2LDAuMDAxeiBNMjIuNzY2LDYuODA4YzQuMTYsMCw3LjUzMSwzLjM3Miw3LjUzMSw3LjUzYzAsNC4xNTktMy4zNzEsNy41My03LjUzMSw3LjUzDQoJCWMtNC4xNTgsMC03LjUyOS0zLjM3MS03LjUyOS03LjUzQzE1LjIzNywxMC4xOCwxOC42MDgsNi44MDgsMjIuNzY2LDYuODA4eiBNMjIuNzYxLDM5LjU3OWMtNC4xNDksMC03Ljk0OS0xLjUxMS0xMC44OC00LjAxMg0KCQljLTAuNzE0LTAuNjA5LTEuMTI2LTEuNTAyLTEuMTI2LTIuNDM5YzAtNC4yMTcsMy40MTMtNy41OTIsNy42MzEtNy41OTJoOC43NjJjNC4yMTksMCw3LjYxOSwzLjM3NSw3LjYxOSw3LjU5Mg0KCQljMCwwLjkzOC0wLjQxLDEuODI5LTEuMTI1LDIuNDM4QzMwLjcxMiwzOC4wNjgsMjYuOTExLDM5LjU3OSwyMi43NjEsMzkuNTc5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
            <li className="ml-5 px-2 py-1">
              <a href="">{usuario}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex">
        {/* Sidebar */}
        <div
          style={{ backgroundColor: "#EFEFEF" }}
          className=" w-1/5  z-0 h-screen h-auto min-h-full max-h-full"
        >
          <div className="">
            <div>
              <ul className="text-gray-900">
                <li className="ml-5 px-2 py-3">
                  <DashboardIcon
                    style={{ color: "#000000", marginRight: 25 }}
                  />
                  <a href="dashboard">Home</a>
                </li>
                <li className="ml-5 px-2 py-3">
                  <AssignmentIndIcon
                    style={{ color: "#000000", marginRight: 25 }}
                  />
                  <a href="pacientes">Patients</a>
                </li>
                {/* <li className="ml-5 px-2 py-3">
                  <ListAltIcon style={{ color: "#000000", marginRight: 25 }} />
                  <a href="donaciones">Donaciones</a>
                </li> */}
                {/* <li className="ml-5 px-2 py-3">
                  <AccountCircleIcon
                    style={{ color: "#000000", marginRight: 25 }}
                  />
                  <a href="crearUsuario">Crear Usuario</a>
                </li> */}
                <li className="ml-5 px-2 py-3">
                  <ExitToAppIcon
                    style={{ color: "#000000", marginRight: 25 }}
                  />
                  <a href="/">Salir</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Content */}
        <div class="w-4/5">
          <main className="">{children}</main>
        </div>
      </div>
    </>
  );
};

export default LayoutHome;
