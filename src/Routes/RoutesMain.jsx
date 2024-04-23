import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";
import { HomePage } from "../components/HomePage";
import { useState } from "react";
import { PrivateRoutes } from "./PrivateRoutes";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
