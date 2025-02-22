import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom"; // Removed Router import
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route element={<PrivateRoute />}>
              <Route path="/homepage" element={<Homepage />} />
            </Route>
            <Route path="/" element={<Navigate to='/signin' replace/>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
