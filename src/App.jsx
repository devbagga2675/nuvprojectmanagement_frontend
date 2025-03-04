import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import DashboardSTU from "./pages/DashboardSTU";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ViewGroupsList from "./pages/ViewGroupsList";
import ViewProject from "./pages/ViewProject";
import LogBookSTU from "./pages/ViewProjectPagesSTU/LogBookSTU";
import EvaluationSTU from "./pages/ViewProjectPagesSTU/EvaluationSTU"
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route element={<PrivateRoute />}>
              <Route path="/studentdashboard" element={<DashboardSTU />}>
                <Route index element={<ViewGroupsList />} />
                <Route path="ProjectDetails/:id" element={<ViewProject />}>
                  <Route index element={<LogBookSTU />} /> 
                  <Route path="logbook" element={<LogBookSTU/>}/>
                  <Route path="evaluation" element={<EvaluationSTU/>}/>
                </Route>
              </Route>
            </Route>
            <Route path="/" element={<Navigate to="/signin" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
